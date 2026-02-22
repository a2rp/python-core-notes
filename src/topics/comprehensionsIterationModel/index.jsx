import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiRepeat,
    FiList,
    FiHash,
    FiGrid,
    FiZap,
    FiPlay,
    FiShuffle,
    FiCpu,
    FiCornerDownRight,
} from "react-icons/fi";

const ComprehensionsIterationModel = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "for-loops",
                icon: <FiRepeat />,
                title: "for loops",
                summary:
                    "Python for loops iterate over items in an iterable, not over indexes by default.",
                points: [
                    "You can loop over lists, strings, tuples, dicts, sets, files, and more.",
                    "for works with any iterable (anything that can return items one by one).",
                    "Prefer direct iteration over indexes unless you truly need the index.",
                ],
                example: `nums = [10, 20, 30]

for n in nums:
    print(n)

for ch in "python":
    print(ch)`,
                note: "In Python, for means: 'give me the next item'. Not 'increment i'.",
            },
            {
                id: "enumerate",
                icon: <FiCornerDownRight />,
                title: "enumerate",
                summary:
                    "enumerate gives you both index and value while iterating.",
                points: [
                    "Default start index is 0.",
                    "You can set start=1 for human-friendly numbering.",
                    "Cleaner than range(len(list)).",
                ],
                example: `names = ["Ash", "Neha", "Niraj"]

for idx, name in enumerate(names):
    print(idx, name)

for idx, name in enumerate(names, start=1):
    print(idx, name)`,
                note: "Use enumerate whenever you need index + item together.",
            },
            {
                id: "zip",
                icon: <FiShuffle />,
                title: "zip",
                summary: "zip pairs items from multiple iterables into tuples.",
                points: [
                    "Stops at the shortest iterable by default.",
                    "Commonly used to combine two lists.",
                    "Useful for parallel iteration.",
                ],
                example: `names = ["Ash", "Neha", "Niraj"]
scores = [90, 95, 88]

for name, score in zip(names, scores):
    print(name, score)`,
                note: "If lengths differ and you want full pairing, use itertools.zip_longest later.",
            },
            {
                id: "range",
                icon: <FiPlay />,
                title: "range",
                summary:
                    "range generates a sequence of numbers lazily (it does not build a list).",
                points: [
                    "range(n): 0 to n-1",
                    "range(start, end): start to end-1",
                    "range(start, end, step): step can be negative too",
                ],
                example: `for i in range(3):
    print(i)  # 0 1 2

for i in range(2, 6):
    print(i)  # 2 3 4 5

for i in range(10, 0, -2):
    print(i)  # 10 8 6 4 2`,
                note: "range is memory-friendly because it generates values on demand.",
            },
            {
                id: "list-comprehension",
                icon: <FiList />,
                title: "List comprehension",
                summary:
                    "A compact way to build lists using an expression and a loop.",
                points: [
                    "Faster and cleaner than appending in many cases.",
                    "Supports filtering with if condition.",
                    "Avoid very complex comprehensions, keep readability.",
                ],
                example: `nums = [1, 2, 3, 4, 5]

squares = [n * n for n in nums]
even_squares = [n * n for n in nums if n % 2 == 0]

print(squares)
print(even_squares)`,
                note: "If it becomes hard to read, use a normal for loop.",
            },
            {
                id: "dict-comprehension",
                icon: <FiHash />,
                title: "Dictionary comprehension",
                summary:
                    "A compact way to build dictionaries using key:value expressions.",
                points: [
                    "Useful for mapping one list into a lookup dict.",
                    "Can filter entries with if.",
                    "Keys must be unique; later values overwrite earlier ones.",
                ],
                example: `names = ["Ash", "Neha", "Niraj"]

lengths = {name: len(name) for name in names}
only_long = {name: len(name) for name in names if len(name) > 3}

print(lengths)
print(only_long)`,
                note: "Dict comprehensions are great for clean transformations.",
            },
            {
                id: "set-comprehension",
                icon: <FiGrid />,
                title: "Set comprehension",
                summary:
                    "A compact way to build sets. Sets automatically keep unique values.",
                points: [
                    "Duplicates are removed automatically.",
                    "Useful for extracting unique computed values.",
                    "Order is not guaranteed like lists.",
                ],
                example: `nums = [1, 2, 2, 3, 3, 3]

unique_squares = {n * n for n in nums}
print(unique_squares)`,
                note: "Set comprehension is perfect for uniqueness without extra logic.",
            },
            {
                id: "generator-expression",
                icon: <FiZap />,
                title: "Generator expression",
                summary:
                    "Like list comprehension but lazy. It produces values one by one instead of building a full list.",
                points: [
                    "Uses parentheses instead of brackets.",
                    "Memory efficient for large data.",
                    "Often used with sum(), any(), all(), max(), min().",
                ],
                example: `nums = [1, 2, 3, 4, 5]

gen = (n * n for n in nums)

print(gen)        # generator object
print(next(gen))  # 1
print(next(gen))  # 4

total = sum(n * n for n in nums)
print(total)`,
                note: "Generators are Python's secret weapon for performance and clean pipelines.",
            },
            {
                id: "iter-next",
                icon: <FiCpu />,
                title: "iter() and next()",
                summary:
                    "iter() gives an iterator from an iterable. next() pulls the next item from the iterator.",
                points: [
                    "Iterable: can produce an iterator (like list, string).",
                    "Iterator: has __next__() method under the hood.",
                    "When iterator ends, it raises StopIteration.",
                ],
                example: `nums = [10, 20, 30]

it = iter(nums)

print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30

# next(it) now would raise StopIteration`,
                note: "for loop internally uses iter() and next() repeatedly.",
            },
            {
                id: "custom-iterator-basics",
                icon: <FiRepeat />,
                title: "Custom iterator basics",
                summary:
                    "You can create your own iterator by defining __iter__ and __next__ methods.",
                points: [
                    "__iter__ should return the iterator object (usually self).",
                    "__next__ should return the next value or raise StopIteration.",
                    "This is used for custom sequences or controlled iteration.",
                ],
                example: `class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

for n in CountDown(3):
    print(n)
# Output:
# 3
# 2
# 1`,
                note: "Custom iterators teach you how Python iteration really works.",
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
                                Comprehensions and Iteration Model
                            </div>
                            <div className="subtitle">
                                This is where Python becomes Pythonic
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
                            Python iteration is built around iterables and
                            iterators. Comprehensions and generators help you
                            write clean, fast, and readable data
                            transformations.
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

export default ComprehensionsIterationModel;
