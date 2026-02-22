import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCode,
    FiSliders,
    FiRepeat,
    FiHash,
    FiCornerDownRight,
    FiLayers,
    FiLink2,
    FiZap,
    FiActivity,
    FiShuffle,
} from "react-icons/fi";

const Functions = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "function-definition",
                icon: <FiCode />,
                title: "Function definition",
                summary:
                    "A function is a reusable block of code defined using def.",
                points: [
                    "Functions help avoid repetition and keep code organized.",
                    "A function can take inputs (parameters) and can return an output.",
                    "Use a docstring for short purpose notes.",
                ],
                example: `def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}"

print(greet("Ash"))`,
                note: "In Python, indentation is the block. No braces.",
            },
            {
                id: "parameters",
                icon: <FiSliders />,
                title: "Parameters",
                summary:
                    "Parameters are the named inputs in a function definition.",
                points: [
                    "Arguments are the actual values passed during a call.",
                    "Python supports positional and keyword arguments.",
                    "Parameter order matters when you call positionally.",
                ],
                example: `def add(a, b):
    return a + b

print(add(2, 3))        # positional arguments
print(add(a=2, b=3))    # keyword arguments`,
                note: "Positional is fast. Keyword is clearer for readability.",
            },
            {
                id: "default-parameters",
                icon: <FiRepeat />,
                title: "Default parameters",
                summary:
                    "Default values are used when the caller does not pass that argument.",
                points: [
                    "Defaults are evaluated at function definition time, not call time.",
                    "Avoid using mutable defaults like [] or {}.",
                    "Use None and create inside the function for safe defaults.",
                ],
                example: `def safe_append(value, arr=None):
    if arr is None:
        arr = []
    arr.append(value)
    return arr

print(safe_append(1))
print(safe_append(2))`,
                note: "Mutable default argument is one of the biggest Python interview traps.",
            },
            {
                id: "args-kwargs",
                icon: <FiHash />,
                title: "args and kwargs",
                summary:
                    "*args collects extra positional args, **kwargs collects extra keyword args.",
                points: [
                    "*args becomes a tuple inside the function.",
                    "**kwargs becomes a dict inside the function.",
                    "Commonly used in decorators and flexible APIs.",
                ],
                example: `def show(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

show(1, 2, 3, name="Ash", role="dev")`,
                note: "Names are conventions: args and kwargs can be any name, but keep them standard.",
            },
            {
                id: "keyword-only-arguments",
                icon: <FiCornerDownRight />,
                title: "Keyword-only arguments",
                summary:
                    "Keyword-only arguments must be passed using name=value.",
                points: [
                    "Use * in parameter list to force keyword-only args.",
                    "This prevents confusion and improves function clarity.",
                    "Great for config-like parameters.",
                ],
                example: `def connect(host, port, *, timeout=10, retries=3):
    return f"{host}:{port} timeout={timeout} retries={retries}"

print(connect("localhost", 8080, timeout=5))
# connect("localhost", 8080, 5)  # invalid, must be keyword`,
                note: "Keyword-only args are a clean way to design safer APIs.",
            },
            {
                id: "return-values",
                icon: <FiZap />,
                title: "Return values",
                summary:
                    "return sends a value back to the caller and stops the function.",
                points: [
                    "If you do not return anything, Python returns None automatically.",
                    "You can return any object: number, string, list, dict, even a function.",
                    "Multiple return paths are common with early exits.",
                ],
                example: `def find_even(nums):
    for n in nums:
        if n % 2 == 0:
            return n
    return None

print(find_even([1, 3, 5, 8, 9]))`,
                note: "return ends the function immediately.",
            },
            {
                id: "multiple-return",
                icon: <FiShuffle />,
                title: "Multiple return",
                summary:
                    "Python can return multiple values by returning a tuple.",
                points: [
                    "Technically it returns one tuple object.",
                    "Tuple unpacking makes it look like multiple returns.",
                    "Used commonly for (value, error) or (min, max) patterns.",
                ],
                example: `def min_max(nums):
    return min(nums), max(nums)

mn, mx = min_max([4, 1, 9, 3])
print(mn, mx)`,
                note: "If you do: result = min_max(...), result is a tuple.",
            },
            {
                id: "scope-rules-legb",
                icon: <FiLayers />,
                title: "Scope rules (LEGB)",
                summary:
                    "Python resolves names using LEGB: Local, Enclosing, Global, Built-in.",
                points: [
                    "Local: inside current function.",
                    "Enclosing: outer function scopes (closures).",
                    "Global: module level variables.",
                    "Built-in: Python builtins like len, print.",
                ],
                example: `x = "global"

def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)

    inner()

outer()`,
                note: "LEGB explains why closures work and why globals can be tricky.",
            },
            {
                id: "closures",
                icon: <FiLink2 />,
                title: "Closures",
                summary:
                    "A closure is a function that remembers variables from an enclosing scope.",
                points: [
                    "Closures allow state without using classes.",
                    "Common in decorators and function factories.",
                    "Use nonlocal if you need to modify the enclosing variable.",
                ],
                example: `def make_counter():
    count = 0

    def inc():
        nonlocal count
        count += 1
        return count

    return inc

c = make_counter()
print(c())  # 1
print(c())  # 2`,
                note: "Closure = function + remembered environment.",
            },
            {
                id: "lambda",
                icon: <FiActivity />,
                title: "lambda",
                summary:
                    "lambda creates a small anonymous function (single expression).",
                points: [
                    "Use when the function is simple and short-lived.",
                    "Most commonly used with sorted, map, filter.",
                    "Avoid long lambdas, use def for readability.",
                ],
                example: `nums = [3, 1, 9, 2]
print(sorted(nums, key=lambda x: x))

users = [{"name": "Ash", "age": 25}, {"name": "Neha", "age": 22}]
print(sorted(users, key=lambda u: u["age"]))`,
                note: "lambda is an expression, not a full function block.",
            },
            {
                id: "higher-order-functions",
                icon: <FiZap />,
                title: "Higher order functions",
                summary:
                    "A higher order function accepts a function as input or returns a function.",
                points: [
                    "Functions are first-class in Python (can be stored in variables).",
                    "Used in callbacks, decorators, composition patterns.",
                    "Helps write flexible reusable logic.",
                ],
                example: `def apply(fn, value):
    return fn(value)

def square(x):
    return x * x

print(apply(square, 5))

def make_multiplier(n):
    def mul(x):
        return x * n
    return mul

double = make_multiplier(2)
print(double(10))`,
                note: "If you understand higher-order functions, decorators become easy.",
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
                            <div className="title">Functions</div>
                            <div className="subtitle">
                                Parameters, scope, closures, and function
                                patterns
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
                            Functions are the building blocks of Python. If this
                            section is strong, you write cleaner code and you
                            understand decorators, callbacks, and real project
                            patterns faster.
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

export default Functions;
