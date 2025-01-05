import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Footer";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const NextVSApollo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = `
*5/1/2025 15:13*
# My macOS Workflow: Switching to Aerospace from Yabai

As someone who relies heavily on a seamless and efficient macOS workflow, I recently made the switch from **Yabai** to **Aerospace** for window management. After months of tweaking and experimenting, I can confidently say this was the best decision for my productivity. Let me take you through the tools I use and why this setup works so well.

## Why I Switched to Aerospace

**Aerospace** caught my attention with its elegant approach to window management. Unlike Yabai, Aerospace integrates better with macOS's native aesthetics while maintaining powerful tiling capabilities. Its minimal configuration and ease of use eliminate the need for overly complex setups. I no longer feel like I’m fighting my window manager—it just works.

### Key Benefits of Aerospace
- **Simplicity**: No endless tweaking or scripting required.
- **Stability**: It plays nice with macOS updates.
- **Customizability**: Offers just the right balance of options for tiling and floating windows.

## The Rest of My Workflow

Switching to Aerospace was just one piece of the puzzle. Here are the other tools I use to complement it:

### 1. **Ghostty Terminal**
For my terminal emulator, I rely on **Ghostty**. It’s lightweight, fast, and comes with just the right features to make my daily workflow smooth:
- True color support for a beautiful CLI experience.
- Blazing-fast performance even with heavy workloads.
- Minimalist design that doesn’t distract from the task at hand.

### 2. **Tmux**
To manage multiple terminal sessions, **Tmux** is my go-to. With its seamless integration into Ghostty, I can:
- Split my terminal into panes.
- Manage multiple sessions and windows.
- Stay productive without ever touching the mouse.

### 3. **SketchyBar**
I use **SketchyBar** to add a custom status bar to my desktop. It provides real-time system stats, quick access to my workflows, and a clean aesthetic that matches macOS perfectly. 
- **Features I Love**:
  - CPU, memory, and network usage indicators.
  - Integration with music players and calendar events.
  - Custom modules for displaying workspace info from Aerospace.

### 4. **Aerospace in Action**
With Aerospace, I can focus on my work rather than managing windows. Some of my favorite features include:
- **Dynamic Layouts**: Switch between tiling and floating windows on the fly.
- **Hotkeys**: Customizable shortcuts for snapping, resizing, and moving windows.
- **Multi-Monitor Support**: Perfect for when I’m using an external display.

## Wrapping It Up

Switching to **Aerospace** has been a game-changer for my macOS workflow. Pairing it with **Ghostty Terminal**, **Tmux**, and **SketchyBar** creates an environment that’s not just functional but enjoyable to use. If you’re looking for a way to streamline your macOS experience, give Aerospace a try—you won’t regret it.

What tools do you use in your workflow? Let me know in the comments or shoot me a message—I’m always looking for new ways to improve!

---
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

export default NextVSApollo;
