import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiFilter,
    FiTrendingDown,
    FiList,
    FiTool,
    FiLink,
    FiLayers,
    FiEdit3,
} from "react-icons/fi";

const FunctionalTools = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "map",
                icon: <FiZap />,
                title: "map",
                summary:
                    "map applies a function to every item and returns a lazy iterator.",
                points: [
                    "map(func, iterable) transforms items one by one.",
                    "Result is an iterator in Python 3, so wrap with list() to see values.",
                    "Use map when transformation is simple. For readability, list comprehensions are often preferred.",
                ],
                example: `nums = [1, 2, 3, 4]

squares = map(lambda x: x * x, nums)

print(list(squares))  # [1, 4, 9, 16]`,
                note: "Pythonic alternative: [x * x for x in nums]",
            },
            {
                id: "filter",
                icon: <FiFilter />,
                title: "filter",
                summary:
                    "filter keeps only items that pass a condition and returns a lazy iterator.",
                points: [
                    "filter(func, iterable) returns items where func(item) is True.",
                    "Result is an iterator in Python 3.",
                    "Most common alternative is list comprehension with if.",
                ],
                example: `nums = [1, 2, 3, 4, 5, 6]

evens = filter(lambda x: x % 2 == 0, nums)

print(list(evens))  # [2, 4, 6]`,
                note: "Pythonic alternative: [x for x in nums if x % 2 == 0]",
            },
            {
                id: "reduce",
                icon: <FiTrendingDown />,
                title: "reduce",
                summary:
                    "reduce combines items into a single value by repeatedly applying a function.",
                points: [
                    "reduce is in functools: from functools import reduce",
                    "It applies func(accumulator, item) repeatedly.",
                    "Use it when you truly need fold-style logic. For sum/product, built-ins are simpler.",
                ],
                example: `from functools import reduce

nums = [1, 2, 3, 4]

total = reduce(lambda acc, x: acc + x, nums, 0)

print(total)  # 10`,
                note: "Prefer built-ins when possible: sum(nums) is clearer than reduce for addition.",
            },
            {
                id: "sorted-with-key",
                icon: <FiList />,
                title: "sorted with key",
                summary:
                    "sorted sorts any iterable and returns a new list. key controls sorting logic.",
                points: [
                    "sorted(iterable, key=..., reverse=...) returns a new list.",
                    "key is a function that returns the value used for sorting.",
                    "Use key to sort complex structures (dicts, tuples, objects).",
                ],
                example: `users = [
    {"name": "Ash", "age": 25},
    {"name": "Neha", "age": 22},
    {"name": "Niraj", "age": 28},
]

by_age = sorted(users, key=lambda u: u["age"])

print(by_age)
# [{'name': 'Neha', 'age': 22}, {'name': 'Ash', 'age': 25}, {'name': 'Niraj', 'age': 28}]`,
                note: "For in-place sorting of a list, use list.sort(...).",
            },
            {
                id: "functools",
                icon: <FiTool />,
                title: "functools",
                summary:
                    "functools contains helper tools for working with functions and callables.",
                points: [
                    "Common utilities: reduce, partial, lru_cache, wraps.",
                    "wraps is important for decorators to preserve function metadata.",
                    "partial is useful to pre-fill arguments.",
                ],
                example: `import functools

# functools.wraps is used inside decorators
# functools.partial helps build a new callable with preset args`,
                note: "If you write decorators, functools.wraps is not optional.",
            },
            {
                id: "partial",
                icon: <FiLink />,
                title: "partial",
                summary:
                    "partial creates a new function by fixing some arguments of an existing function.",
                points: [
                    "Useful when you need a function with fewer arguments.",
                    "Very common in callbacks and configuration-heavy code.",
                    "Returns a callable that behaves like the original function with preset args.",
                ],
                example: `from functools import partial

def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube = partial(power, exp=3)

print(square(5))  # 25
print(cube(2))    # 8`,
                note: "partial is like making a customized version of a function.",
            },
            {
                id: "decorators-basics",
                icon: <FiLayers />,
                title: "Decorators basics",
                summary:
                    "A decorator is a function that takes another function and returns a new function with extra behavior.",
                points: [
                    "Decorators wrap a function without changing its source code.",
                    "Used for logging, timing, caching, authorization, retries, etc.",
                    "Syntax sugar: @decorator above a function definition.",
                ],
                example: `def my_decorator(fn):
    def wrapper():
        print("Before")
        fn()
        print("After")
    return wrapper

@my_decorator
def hello():
    print("Hello")

hello()

# Output:
# Before
# Hello
# After`,
                note: "Decorators work because functions are objects in Python.",
            },
            {
                id: "writing-decorators",
                icon: <FiEdit3 />,
                title: "Writing decorators",
                summary:
                    "Use *args and **kwargs to support any function signature. Use functools.wraps to preserve metadata.",
                points: [
                    "wrapper should accept *args and **kwargs to handle all inputs.",
                    "Return the result of the original function.",
                    "Use @wraps(fn) so name, docstring, and help() stay correct.",
                ],
                example: `from functools import wraps

def logger(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("Calling:", fn.__name__, "args:", args, "kwargs:", kwargs)
        result = fn(*args, **kwargs)
        print("Done:", fn.__name__)
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(2, 3))`,
                note: "Always use wraps in real projects. Without it, debugging and docs become messy.",
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
                            <div className="title">Functional Tools</div>
                            <div className="subtitle">
                                Practical function-based helpers used in real
                                Python code
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
                            These tools help you write compact, reusable logic.
                            Use them for clarity, not for showing off.
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

export default FunctionalTools;
