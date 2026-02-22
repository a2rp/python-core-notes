import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCheckSquare,
    FiShield,
    FiFileText,
    FiAlertTriangle,
    FiZap,
    FiTool,
} from "react-icons/fi";

const TestingBestPractices = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "assert",
                icon: <FiCheckSquare />,
                title: "assert",
                summary:
                    "assert is a quick sanity check. It raises AssertionError if the condition is False.",
                points: [
                    "Use assert to verify assumptions during development.",
                    "Do not use assert for real input validation in production code.",
                    "assert can be disabled when Python runs with optimization (-O).",
                ],
                example: `def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(-1, 1) == 0

# If condition fails:
# AssertionError is raised`,
                note: "Think of assert as a developer guardrail, not a user-facing error system.",
            },
            {
                id: "basic-unit-testing",
                icon: <FiTool />,
                title: "Basic unit testing idea",
                summary:
                    "Unit tests check small pieces of code (functions/classes) in isolation to prevent regressions.",
                points: [
                    "A unit test should be small, fast, and repeatable.",
                    "Test behavior, not implementation details.",
                    "Common pattern: Arrange, Act, Assert.",
                ],
                example: `# Example using built-in unittest

import unittest

def is_even(n):
    return n % 2 == 0

class TestNumbers(unittest.TestCase):
    def test_is_even(self):
        self.assertTrue(is_even(2))
        self.assertFalse(is_even(3))

if __name__ == "__main__":
    unittest.main()

# Run:
# python test_file.py`,
                note: "Even 5 to 10 small tests can save hours when refactoring.",
            },
            {
                id: "pep8",
                icon: <FiFileText />,
                title: "PEP8",
                summary:
                    "PEP8 is the official Python style guide. Clean style improves readability and teamwork.",
                points: [
                    "Use 4 spaces for indentation (never tabs).",
                    "Use snake_case for variables and functions.",
                    "Use CapWords for classes.",
                    "Keep lines reasonably short (common target is 79 to 100).",
                    "Use blank lines to separate logical sections.",
                ],
                example: `# Good PEP8 style examples

class UserProfile:
    def __init__(self, user_id):
        self.user_id = user_id

def get_user_name(user_id):
    return "Ash"

is_active = True`,
                note: "PEP8 is not about being strict. It is about being readable and consistent.",
            },
            {
                id: "common-interview-traps",
                icon: <FiAlertTriangle />,
                title: "Common interview traps",
                summary:
                    "Python interviews often test fundamentals that look simple but have sharp edges.",
                points: [
                    "Mutable default arguments (very common trap).",
                    "Confusing == with is.",
                    "Late binding in closures inside loops.",
                    "Mutability and references in lists/dicts.",
                    "Shadowing built-ins like list, dict, str.",
                ],
                example: `# 1) Mutable default argument trap
def add_item(x, items=[]):
    items.append(x)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2]  (surprise)

# Fix:
def add_item_safe(x, items=None):
    if items is None:
        items = []
    items.append(x)
    return items

# 2) == vs is
a = [1, 2]
b = [1, 2]
print(a == b)  # True (same values)
print(a is b)  # False (different objects)`,
                note: "If you explain these clearly, you instantly look strong in interviews.",
            },
            {
                id: "common-performance-traps",
                icon: <FiZap />,
                title: "Common performance traps",
                summary:
                    "Most Python performance issues are from repeated work, slow loops, and unnecessary allocations.",
                points: [
                    "Using string concatenation in loops instead of join.",
                    "Recomputing the same result inside loops (no caching).",
                    "Using list when set lookup is needed (O(n) vs O(1) average).",
                    "Building huge lists when you can use generators.",
                    "Using slow patterns like nested loops without thinking about complexity.",
                ],
                example: `# 1) String concat in loop (slow)
s = ""
for i in range(5):
    s += str(i)

# Better:
parts = []
for i in range(5):
    parts.append(str(i))
s = "".join(parts)

# 2) List lookup vs set lookup
nums_list = [1, 2, 3, 4, 5]
nums_set = {1, 2, 3, 4, 5}

print(5 in nums_list)  # slower for large lists
print(5 in nums_set)   # faster average lookup

# 3) Prefer generator for large pipelines
squares = (x * x for x in range(1000000))`,
                note: "First write readable code, then optimize the real bottlenecks with measurements.",
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
                            <FiShield />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Testing and Best Practices
                            </div>
                            <div className="subtitle">
                                Write safer code, avoid common traps
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
                            Testing and best practices make your code reliable.
                            Interviews love these because they show maturity,
                            not just syntax knowledge.
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

export default TestingBestPractices;
