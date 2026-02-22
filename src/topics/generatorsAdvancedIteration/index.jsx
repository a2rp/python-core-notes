import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiRefreshCw,
    FiList,
    FiPlay,
    FiSend,
} from "react-icons/fi";

const GeneratorsAdvancedIteration = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "yield",
                icon: <FiZap />,
                title: "yield",
                summary:
                    "yield pauses a function and returns a value. Next time, it resumes from where it stopped.",
                points: [
                    "return ends the function. yield pauses it.",
                    "A function with yield becomes a generator function.",
                    "Generators produce values one at a time (on-demand).",
                ],
                example: `def demo():
    yield 1
    yield 2
    yield 3

g = demo()
print(next(g))  # 1
print(next(g))  # 2
print(next(g))  # 3`,
                note: "Think of yield as: 'pause here and remember the state'.",
            },
            {
                id: "generator-functions",
                icon: <FiPlay />,
                title: "Generator functions",
                summary:
                    "A generator function returns a generator object that can be iterated.",
                points: [
                    "Calling a generator function does not run the body immediately.",
                    "It returns a generator object that runs only when you iterate or call next().",
                    "When finished, it raises StopIteration automatically.",
                ],
                example: `def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

g = count_up_to(3)
for x in g:
    print(x)

# Output:
# 1
# 2
# 3`,
                note: "A generator is just an iterator that remembers its execution state.",
            },
            {
                id: "generator-vs-list",
                icon: <FiList />,
                title: "Generator vs list",
                summary:
                    "Lists store all values in memory. Generators produce values one by one.",
                points: [
                    "List comprehension creates a full list immediately.",
                    "Generator expression is lazy, it computes values on demand.",
                    "Generators are memory-friendly for large data.",
                ],
                example: `# List comprehension (eager)
nums_list = [x * 2 for x in range(5)]
print(nums_list)  # [0, 2, 4, 6, 8]

# Generator expression (lazy)
nums_gen = (x * 2 for x in range(5))
print(nums_gen)        # <generator object ...>
print(list(nums_gen))  # [0, 2, 4, 6, 8]`,
                note: "Use generators when data is large or when you do not need everything at once.",
            },
            {
                id: "lazy-evaluation",
                icon: <FiRefreshCw />,
                title: "Lazy evaluation",
                summary:
                    "Lazy evaluation means values are computed only when needed, not upfront.",
                points: [
                    "Generators are lazy by default.",
                    "This helps performance when you might not consume all values.",
                    "It is common in pipelines: filter -> map -> reduce style.",
                ],
                example: `def numbers():
    print("start")
    yield 1
    print("middle")
    yield 2
    print("end")
    yield 3

g = numbers()
print(next(g))  # prints: start, then 1
print(next(g))  # prints: middle, then 2`,
                note: "Notice how the prints happen only when next() is called.",
            },
            {
                id: "sending-values",
                icon: <FiSend />,
                title: "Sending values to generators",
                summary:
                    "You can send values into a generator using .send(). The value becomes the result of yield.",
                points: [
                    "send(value) continues the generator and injects value into it.",
                    "The first call must be next() or send(None) to start the generator.",
                    "Useful for advanced workflows like coroutines and streaming processing.",
                ],
                example: `def worker():
    msg = yield "ready"
    while True:
        msg = yield f"got: {msg}"

g = worker()
print(next(g))          # ready (starts generator)
print(g.send("hi"))     # got: hi
print(g.send("again"))  # got: again`,
                note: "send() is advanced. Use it when you need a two-way generator.",
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
                            <div className="title">
                                Generators and Advanced Iteration
                            </div>
                            <div className="subtitle">
                                Lazy, memory-friendly iteration patterns
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
                            Generators help you process large data without
                            loading everything into memory. This is one of the
                            most Pythonic performance tools.
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

export default GeneratorsAdvancedIteration;
