import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Footer";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LearnNext: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = `

*23/12/2024 16:56*

# Why GraphQL with Apollo Server Feels Like Overkill for Smaller SaaS Projects

As developers, we always want to use the latest and greatest technologies, but sometimes sticking with a simpler approach is the best option—especially when it comes to smaller SaaS projects. In my experience, GraphQL, while powerful and flexible, can sometimes feel like overkill for projects where speed and simplicity are key. Let me explain why I’ve moved away from using GraphQL for my smaller SaaS applications in favor of simpler solutions.

## The Complexity of GraphQL

One of the main reasons I found GraphQL too complex for smaller projects is the setup and the learning curve. Unlike REST APIs, where you can quickly define endpoints and move on, GraphQL requires defining schemas, resolvers, and managing complex queries. 

While this level of flexibility is fantastic for large-scale applications, when you're building a smaller SaaS product with tight deadlines, it can be a major distraction. GraphQL’s powerful querying capabilities often feel like too much when your application’s data flow is simple and straightforward.

## Too Much Boilerplate

GraphQL requires a lot of boilerplate code. You need to define queries, mutations, and set up resolvers. For every new feature or endpoint, there's often a need for multiple files and configurations. When the goal is to ship quickly and keep the codebase manageable, all this additional work can slow you down.

For smaller SaaS projects that need to get to market fast, spending hours building out GraphQL schemas and resolvers often feels like time that could have been better spent on actual product features. In many cases, a simple REST API or even built-in tools from frameworks like Next.js could have handled the same tasks with less overhead.

## The Query Complexity

Another challenge with GraphQL is query complexity. With GraphQL, the client can specify exactly what data it needs, which can lead to very complicated queries. This flexibility is amazing in the right context, but it can also introduce performance issues or lead to over-fetching and under-fetching data if not carefully managed.

For small SaaS apps, keeping things simple means you don’t have to worry as much about optimizing or limiting the size and complexity of queries. A well-structured REST API is much more predictable and easier to manage at scale—especially when you don’t have a huge team to manage that complexity.

## Speed of Development

At the end of the day, one of the most important things when building a SaaS app is the ability to ship quickly. GraphQL, for all its benefits, often gets in the way of that. For a small SaaS project, where time is of the essence, choosing a simpler solution like a REST API or using tools like Next.js for API routes and Prisma for database interactions can be much more efficient.

With these tools, I’m able to rapidly develop features, iterate quickly, and focus on what matters most: building a product that users love. Introducing the extra layer of abstraction and configuration that comes with GraphQL can slow down this process significantly.

## Prisma vs TypeORM

### Prisma

Creating model for User and Post using Prisma.

~~~ typescript 
model User {
  id    Int     @id @default(autoincrement())
  name  String?
  email String  @unique
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int?
  author    User?   @relation(fields: [authorId], references: [id])
}
~~~

### TypeORM

Creating model for User and Post using TypeORM

~~~ typescript 
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ unique: true })
  email: string

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[]
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  content: string

  @Column({ default: false })
  published: boolean

  @ManyToOne((type) => User, (user) => user.posts)
  author: User
}
~~~

As you can see, Prisma is shorter than TypeORM, and this makes it easier to ship a SaaS that doesn't require a lot of type safety and clean code for communication because if I'm building a SaaS, I'm working alone, so clean code and really good code with communication are important.

## Simple Example: Apollo Client vs. Next.js API Routes

GraphQL Apollo (Client-Side Fetching) Uses Apollo Client to fetch GraphQL data in a React app.

~~~ typescript
// Install Apollo: \`npm install @apollo/client graphql\`

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://example.com/graphql',
  cache: new InMemoryCache(),
});

export async function fetchData() {
  const { data } = await client.query({
    query: gql\`
      query GetItems {
        items {
          id
          name
        }
      }
    \`,
  });
  return data.items;
}
~~~

Next.js API Routes (REST or GraphQL) Provides backend API endpoints for fetching data.

~~~ typescript
// Create an API route: \`/pages/api/graphql.ts\`

export default function handler(req, res) {
  const data = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
  };
  res.status(200).json(data);
}
~~~

Front-end Fetching
~~~ typescript
export async function fetchData() {
  const res = await fetch('/api/graphql');
  const data = await res.json();
  return data.items;
}
~~~

As you can see again, Next. js is simpler with easier than GraghQL with Apollo Server when creating an API.

## Conclusion
Next.js is simpler and faster for building SaaS projects because it offers built-in features like server-side rendering, routing, and API routes, reducing the need for complex configurations. With its ease of use and excellent performance, it allows developers to quickly prototype and deploy applications, making it a great choice for rapidly shipping SaaS products.

`;

  return (
    <div className="min-h-screen">
      <article>
        <div className="dark:bg-[#202023] min-h-screen  overflow-auto transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] bg-white ">
          <Navbar />
          <div className="pt-24 px-5 text-xl text-black dark:text-white max-w-2xl mx-auto md:max-w-3xl">
            <div className="prose prose-zinc dark:prose-invert !max-w-none">
              <Markdown
                children={content}
                className="prose-pre:p-0 prose-pre:overflow-x-visible"
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        PreTag="div"
                        children={String(children).replace(/\n$/, "")}
                        language={match[1]}
                        style={oneDark}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </article>
    </div>
  );
};

export default LearnNext;
