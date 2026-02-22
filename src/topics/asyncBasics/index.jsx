import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiRefreshCw,
    FiActivity,
    FiClock,
} from "react-icons/fi";

const AsyncBasics = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "what-is-async",
                icon: <FiZap />,
                title: "What is async",
                summary:
                    "Async means your program can start a task and continue doing other work while waiting for it to finish.",
                points: [
                    "Async is mainly useful for waiting tasks, like network calls, file I/O, database calls.",
                    "It helps avoid blocking the entire program while waiting.",
                    "In Python, async code is built around coroutines (functions marked with async).",
                ],
                example: `# Async idea (concept)
# Start task A (waiting)
# Do task B while A is waiting
# Resume A when ready`,
                note: "Async is not 'faster CPU'. It is 'better waiting management'.",
            },
            {
                id: "event-loop",
                icon: <FiRefreshCw />,
                title: "Event loop concept",
                summary:
                    "The event loop is the scheduler that runs async tasks and switches between them when they are waiting.",
                points: [
                    "Async tasks run until they hit an await point (a waiting point).",
                    "When a task awaits, the event loop can run another task.",
                    "This creates concurrency without using multiple threads for each task.",
                ],
                example: `# Simple mental model:
# Task 1 runs -> awaits -> pauses
# Event loop runs Task 2 -> awaits -> pauses
# When Task 1 is ready -> resume it`,
                note: "Event loop = traffic controller for coroutines.",
            },
            {
                id: "async-await",
                icon: <FiActivity />,
                title: "async and await",
                summary:
                    "async defines a coroutine. await pauses it until an async operation completes.",
                points: [
                    "async def creates a coroutine function.",
                    "await can only be used inside async functions.",
                    "You run coroutines using an event loop (commonly asyncio.run).",
                ],
                example: `import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # pretend network wait
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())`,
                note: "await does not block the whole program. It pauses only that coroutine.",
            },
            {
                id: "when-to-use-async",
                icon: <FiClock />,
                title: "When to use async",
                summary:
                    "Use async when you have many I/O waits and want concurrency with low overhead.",
                points: [
                    "Good for: APIs, web scraping, many HTTP requests, websockets, chat servers.",
                    "Not good for: CPU-heavy tasks like image processing, ML training (use multiprocessing).",
                    "Async shines when you have many tasks mostly waiting on I/O.",
                ],
                example: `# Good use:
# - send 100 HTTP requests concurrently

# Not the best use:
# - heavy CPU loops (async won't speed that up)`,
                note: "Rule: if most time is waiting, async helps. If most time is computing, async doesn't.",
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "isOpen" : ""}>
                <Styled.Header
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                >
                    <div className="left">
                        <div className="badge">
                            <FiZap />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Async Basics</div>
                            <div className="subtitle">
                                Just core mental model
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <span className="hint">
                            {open ? "Click to collapse" : "Click to expand"}
                        </span>
                        <span className="chev">
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="topNote">
                            Async is about handling waiting efficiently. It is
                            not magic speed. Use it when tasks spend time
                            waiting on I/O.
                        </div>

                        <div className="grid">
                            {items.map((it) => (
                                <div className="card" key={it.id} id={it.id}>
                                    <div className="cardHead">
                                        <div className="cardIcon">
                                            {it.icon}
                                        </div>
                                        <div className="cardTitle">
                                            {it.title}
                                        </div>
                                    </div>

                                    <div className="cardSummary">
                                        {it.summary}
                                    </div>

                                    <ul className="list">
                                        {it.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>

                                    {it.example && (
                                        <pre className="code">
                                            {`${it.example}`}
                                        </pre>
                                    )}

                                    {it.note && (
                                        <div className="note">{it.note}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default AsyncBasics;
