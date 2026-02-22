import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiHash,
    FiLink2,
    FiCopy,
    FiLayers,
    FiTrash2,
    FiZap,
    FiType,
} from "react-icons/fi";

const MemoryModelMutability = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "object-identity",
                icon: <FiHash />,
                title: "Object identity",
                summary:
                    "Identity means the object itself, not just its value. Two objects can have the same value but still be different objects.",
                points: [
                    "Value equality checks content (==).",
                    "Identity checks if two names point to the same object (is).",
                    "Use is mainly for None checks and identity checks, not normal value comparisons.",
                ],
                example: `a = [1, 2]
b = [1, 2]

print(a == b)  # True (same values)
print(a is b)  # False (different objects)

x = None
print(x is None)  # True`,
                note: "Rule - use == for values, use is for identity (mostly None).",
            },
            {
                id: "id-function",
                icon: <FiCpu />,
                title: "id()",
                summary:
                    "id(obj) returns a unique identity of an object during its lifetime (commonly its memory address in CPython).",
                points: [
                    "id helps you understand reference behavior.",
                    "Two variables pointing to the same object will have the same id.",
                    "Do not depend on id for program logic, use it only for debugging/learning.",
                ],
                example: `a = [1, 2, 3]
b = a

print(id(a))
print(id(b))   # same as a

b.append(4)
print(a)       # [1, 2, 3, 4]`,
                note: "If id is same, you are looking at the same object.",
            },
            {
                id: "mutability",
                icon: <FiLink2 />,
                title: "Mutability vs immutability",
                summary:
                    "Mutable objects can change after creation. Immutable objects cannot change, a new object is created instead.",
                points: [
                    "Mutable: list, dict, set",
                    "Immutable: int, float, bool, str, tuple (mostly)",
                    "Mutability affects copying, function arguments, and bugs in shared state.",
                ],
                example: `# Mutable example (list)
a = [1, 2]
b = a
b.append(3)
print(a)  # [1, 2, 3]

# Immutable example (int)
x = 10
y = x
y += 1
print(x)  # 10
print(y)  # 11`,
                note: "Mutation changes the same object. Immutability creates a new object.",
            },
            {
                id: "shallow-copy",
                icon: <FiCopy />,
                title: "Shallow copy",
                summary:
                    "A shallow copy copies the outer container but keeps references to the same inner objects.",
                points: [
                    "Good for flat lists/dicts with primitives.",
                    "Dangerous for nested lists/dicts because inner objects are still shared.",
                    "Common methods: list.copy(), dict.copy(), copy.copy(obj).",
                ],
                example: `import copy

a = [[1, 2], [3, 4]]
b = copy.copy(a)   # shallow copy

b[0].append(99)

print(a)  # [[1, 2, 99], [3, 4]]
print(b)  # [[1, 2, 99], [3, 4]]`,
                note: "Outer is new, inner is shared. That is the trap.",
            },
            {
                id: "deep-copy",
                icon: <FiLayers />,
                title: "Deep copy",
                summary:
                    "A deep copy recursively copies everything, including nested objects.",
                points: [
                    "Useful for nested structures you want fully independent.",
                    "More expensive than shallow copy (time + memory).",
                    "Use copy.deepcopy(obj).",
                ],
                example: `import copy

a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)

b[0].append(99)

print(a)  # [[1, 2], [3, 4]]
print(b)  # [[1, 2, 99], [3, 4]]`,
                note: "Deep copy breaks shared references inside nested structures.",
            },
            {
                id: "reference-behavior",
                icon: <FiLink2 />,
                title: "Reference behavior",
                summary:
                    "Variables in Python are names pointing to objects. Assignment never copies, it only binds a name to an object.",
                points: [
                    "a = b does not copy b, it makes a point to the same object.",
                    "Function arguments are passed as object references (passed by assignment).",
                    "Mutating a passed-in mutable object affects the caller.",
                ],
                example: `def add_item(lst):
    lst.append("x")

items = []
add_item(items)
print(items)  # ['x']`,
                note: "This is why default mutable arguments are a famous Python trap (we will cover it in Functions).",
            },
            {
                id: "gc-basics",
                icon: <FiTrash2 />,
                title: "Garbage collection basics",
                summary:
                    "Python frees memory by removing unreachable objects. CPython uses reference counting plus a cyclic garbage collector.",
                points: [
                    "Reference counting frees objects immediately when count becomes zero.",
                    "Cyclic GC handles reference cycles (objects referencing each other).",
                    "You rarely manage memory manually, but you should avoid unnecessary references.",
                ],
                example: `# Reference count drops to zero example
a = [1, 2, 3]
a = None  # list object becomes unreachable and can be freed`,
                note: "Memory leaks in Python often come from global caches or long-lived references, not from missing 'free'.",
            },
            {
                id: "small-integer-caching",
                icon: <FiZap />,
                title: "Small integer caching",
                summary:
                    "CPython reuses small integers for performance, so some integers share the same identity.",
                points: [
                    "Commonly, integers like -5 to 256 are cached in CPython.",
                    "So a is b can be True for small integers even if created separately.",
                    "Never rely on this in code logic. Use == for numeric comparisons.",
                ],
                example: `a = 100
b = 100
print(a is b)  # often True in CPython

x = 1000
y = 1000
print(x is y)  # often False

print(a == b)  # True always`,
                note: "Identity caching is an implementation detail, not a language guarantee.",
            },
            {
                id: "string-interning",
                icon: <FiType />,
                title: "String interning",
                summary:
                    "CPython may reuse some strings (especially identifiers) to save memory and speed up comparisons.",
                points: [
                    "Some literals may point to the same object automatically.",
                    "Interning is more common for small strings and identifier-like strings.",
                    "Never rely on is for string comparisons, always use ==.",
                ],
                example: `a = "python"
b = "python"
print(a is b)   # often True for literals

c = "".join(["py", "thon"])
print(a == c)   # True
print(a is c)   # often False

# Correct comparison:
print(a == c)   # True`,
                note: "String interning exists, but your code should be correct without caring about it.",
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
                            <FiCpu />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Memory Model and Mutability
                            </div>
                            <div className="subtitle">
                                This separates average from strong Python dev
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
                            If you understand references, identity, and copying,
                            you avoid 80% of confusing Python bugs.
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

export default MemoryModelMutability;
