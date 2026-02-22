import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiPackage,
    FiClock,
    FiLayers,
    FiRepeat,
    FiCpu,
    FiShuffle,
    FiSearch,
    FiFolder,
} from "react-icons/fi";

const StandardLibraryEssentials = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "datetime",
                icon: <FiClock />,
                title: "datetime",
                summary:
                    "Work with dates and times using datetime, date, time, and timedelta.",
                points: [
                    "datetime handles full date + time.",
                    "timedelta represents a duration (difference).",
                    "strftime formats datetime into a string.",
                    "Use datetime.now() for current local time.",
                ],
                example: `from datetime import datetime, timedelta

now = datetime.now()
print(now)

future = now + timedelta(days=7)
print(future)

print(now.strftime("%Y-%m-%d %H:%M:%S"))`,
                note: "For timezone-heavy work, start with datetime and later explore zoneinfo.",
            },
            {
                id: "collections",
                icon: <FiLayers />,
                title: "collections module",
                summary:
                    "Extra data structures that are faster and cleaner for many tasks.",
                points: [
                    "Counter counts items quickly.",
                    "defaultdict avoids manual key checks.",
                    "deque is a fast queue from both ends.",
                    "namedtuple gives tuple-like objects with named fields.",
                ],
                example: `from collections import Counter, defaultdict, deque

# Counter
c = Counter("mississippi")
print(c)

# defaultdict
d = defaultdict(int)
d["a"] += 1
print(d["a"])

# deque
q = deque([1, 2, 3])
q.appendleft(0)
q.append(4)
print(q)`,
                note: "If a problem feels like 'counting' or 'queue', collections usually has the perfect tool.",
            },
            {
                id: "itertools",
                icon: <FiRepeat />,
                title: "itertools",
                summary:
                    "Fast iterator building blocks for looping, combinations, and patterns.",
                points: [
                    "product creates Cartesian product (like nested loops).",
                    "permutations generates all orderings.",
                    "combinations picks unique groups.",
                    "chain joins multiple iterables into one stream.",
                ],
                example: `import itertools

print(list(itertools.product([1, 2], ["a", "b"])))
print(list(itertools.combinations([1, 2, 3], 2)))
print(list(itertools.permutations([1, 2, 3], 2)))

nums = itertools.chain([1, 2], [3, 4])
print(list(nums))`,
                note: "itertools is great for interview-style problems and efficient looping.",
            },
            {
                id: "math",
                icon: <FiCpu />,
                title: "math",
                summary:
                    "Mathematical functions and constants like sqrt, floor, ceil, pi.",
                points: [
                    "math.sqrt for square root.",
                    "math.floor and math.ceil for rounding boundaries.",
                    "math.pi and math.e are common constants.",
                    "math.gcd helps with fractions and number theory.",
                ],
                example: `import math

print(math.sqrt(25))
print(math.floor(3.9))
print(math.ceil(3.1))
print(math.pi)

print(math.gcd(24, 36))`,
                note: "Prefer math for numeric utilities instead of writing your own rounding logic.",
            },
            {
                id: "random",
                icon: <FiShuffle />,
                title: "random",
                summary:
                    "Generate random numbers, pick random elements, and shuffle lists.",
                points: [
                    "random.random gives float between 0 and 1.",
                    "randint gives inclusive random integers.",
                    "choice picks one random element.",
                    "shuffle shuffles a list in-place.",
                ],
                example: `import random

print(random.random())
print(random.randint(1, 10))

items = ["a", "b", "c", "d"]
print(random.choice(items))

random.shuffle(items)
print(items)`,
                note: "For security tokens, do not use random. Use secrets module instead.",
            },
            {
                id: "re-regex",
                icon: <FiSearch />,
                title: "re (regex basics)",
                summary:
                    "Pattern matching and search on strings using regular expressions.",
                points: [
                    "re.search finds first match anywhere.",
                    "re.match matches from the start of the string.",
                    "re.findall returns all matches as a list.",
                    "re.sub replaces patterns with new text.",
                ],
                example: `import re

text = "Email: test123@gmail.com"

m = re.search(r"\\w+@\\w+\\.\\w+", text)
print(m.group() if m else "No match")

nums = re.findall(r"\\d+", "a1 b22 c333")
print(nums)

clean = re.sub(r"\\d+", "#", "a1 b22 c333")
print(clean)`,
                note: "Regex is powerful but can get unreadable. Use it when patterns are truly pattern-like.",
            },
            {
                id: "pathlib",
                icon: <FiFolder />,
                title: "pathlib",
                summary: "Modern, readable way to work with files and paths.",
                points: [
                    "Path objects replace manual string path joining.",
                    "Use / operator to join paths cleanly.",
                    "Check existence using exists().",
                    "Read and write text files using read_text and write_text.",
                ],
                example: `from pathlib import Path

base = Path(".")
file = base / "notes.txt"

file.write_text("Hello Python", encoding="utf-8")
print(file.exists())
print(file.read_text(encoding="utf-8"))`,
                note: "pathlib makes code portable across Windows and Linux without manual slashes.",
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
                            <FiPackage />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Standard Library Essentials
                            </div>
                            <div className="subtitle">
                                Core built-in modules you should know
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
                            Python's standard library is a superpower. These
                            modules cover most daily needs without installing
                            extra packages.
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

export default StandardLibraryEssentials;
