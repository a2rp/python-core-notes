import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiTerminal,
    FiPlay,
    FiCpu,
    FiHash,
    FiRefreshCw,
    FiEdit3,
    FiGitBranch,
    FiShuffle,
    FiCornerDownRight,
    FiSlash,
} from "react-icons/fi";

const Foundations = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "what-is-python",
                icon: <FiHash />,
                title: "What is Python",
                summary:
                    "Python is a high-level language focused on readability and fast development.",
                points: [
                    "High-level means you write human-friendly code, not low-level machine instructions.",
                    "Python is used for scripting, web, automation, data, tooling, AI, and backend services.",
                    "Python code is usually executed by CPython (the most common interpreter).",
                ],
                example: `# Python reads like plain English
name = "Ash"
age = 25

print(name, age)`,
                note: "Goal of Python is clarity. If your code reads cleanly, you are doing it right.",
            },
            {
                id: "interpreted-vs-compiled",
                icon: <FiCpu />,
                title: "Interpreted vs compiled",
                summary:
                    "Python is commonly called interpreted, but it still compiles to bytecode before running.",
                points: [
                    "Compiled languages usually produce a standalone binary (like C/C++).",
                    "Interpreted languages execute through an interpreter at runtime.",
                    "Python (CPython) compiles .py into bytecode (.pyc) and runs it in a virtual machine.",
                ],
                example: `# You run source code:
python app.py

# Internally CPython does:
# .py -> bytecode -> execute by interpreter`,
                note: "So Python is not 'no compilation'. It is 'no manual compilation step'.",
            },
            {
                id: "cpython-overview",
                icon: <FiCpu />,
                title: "CPython overview",
                summary:
                    "CPython is the default Python implementation written in C.",
                points: [
                    "CPython is what most people mean when they say 'Python'.",
                    "It converts Python code to bytecode and executes it.",
                    "It manages memory, objects, reference counting, and garbage collection.",
                ],
                example: `# Check your implementation
import platform
print(platform.python_implementation())  # often: CPython`,
                note: "Other implementations exist (PyPy, Jython), but CPython is the standard baseline.",
            },
            {
                id: "running-python-files",
                icon: <FiPlay />,
                title: "Running Python files",
                summary: "You run Python scripts using the python command.",
                points: [
                    "A file with extension .py is a Python script.",
                    "You can run it from terminal with python file.py.",
                    "Use a virtual environment (venv) later for real projects.",
                ],
                example: `# Run a python file
python main.py

# If you have multiple versions:
python3 main.py`,
                note: "Keep one entry file like main.py or app.py for clean project structure.",
            },
            {
                id: "repl-basics",
                icon: <FiTerminal />,
                title: "REPL basics",
                summary:
                    "REPL is an interactive shell to quickly test Python code.",
                points: [
                    "REPL means Read Eval Print Loop.",
                    "Useful for quick experiments, not full programs.",
                    "Exit with Ctrl + D (Mac/Linux) or Ctrl + Z then Enter (Windows).",
                ],
                example: `# Start REPL
python

# Then type:
>>> 2 + 3
5
>>> "py" * 3
'pypypy'`,
                note: "REPL is great for learning and debugging small logic.",
            },
            {
                id: "variables-dynamic-typing",
                icon: <FiEdit3 />,
                title: "Variables and dynamic typing",
                summary:
                    "Python variables do not have fixed types. The object has the type, not the variable.",
                points: [
                    "A variable is just a name pointing to an object in memory.",
                    "The same variable can point to different types at different times.",
                    "Use type() to check the type at runtime.",
                ],
                example: `x = 10
print(type(x))  # int

x = "ten"
print(type(x))  # str`,
                note: "Dynamic typing is powerful but can create bugs if you mix types carelessly.",
            },
            {
                id: "primitive-data-types",
                icon: <FiShuffle />,
                title: "Primitive data types",
                summary:
                    "Python has core built-in types like int, float, bool, str, and NoneType.",
                points: [
                    "int: whole numbers",
                    "float: decimals",
                    "bool: True or False",
                    "str: text",
                    "None: represents 'no value'",
                ],
                example: `a = 12          # int
b = 12.5        # float
c = True        # bool
d = "python"    # str
e = None        # NoneType

print(type(e))  # <class 'NoneType'>`,
                note: "In Python, everything is an object, even numbers.",
            },
            {
                id: "type-conversion",
                icon: <FiRefreshCw />,
                title: "Type conversion",
                summary:
                    "Use int(), float(), str(), bool() to convert types when needed.",
                points: [
                    "int('12') works, int('12.5') fails.",
                    "float('12.5') works.",
                    "bool('') is False, bool('hello') is True.",
                    "Always validate user input before converting.",
                ],
                example: `x = "12"
print(int(x) + 3)  # 15

y = "12.5"
print(float(y) + 1)  # 13.5

print(bool(""))       # False
print(bool("ok"))     # True`,
                note: "Most beginner bugs are input + conversion bugs. Be strict with conversions.",
            },
            {
                id: "operators",
                icon: <FiGitBranch />,
                title: "Operators",
                summary:
                    "Operators allow arithmetic, comparisons, and boolean logic.",
                points: [
                    "Arithmetic: + - * / // % **",
                    "Comparison: == != > < >= <=",
                    "Logical: and or not",
                    "Membership: in, not in",
                ],
                example: `a = 10
b = 3

print(a / b)   # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)   # 1
print(a ** b)  # 1000

print(a > b and b == 3)  # True
print("py" in "python")  # True`,
                note: "Remember: == compares values, is compares identity (same object).",
            },
            {
                id: "control-flow",
                icon: <FiCornerDownRight />,
                title: "Control flow (if, match, loops)",
                summary:
                    "Control flow lets your code make decisions and repeat work.",
                points: [
                    "if/elif/else handles decisions.",
                    "for loops iterate over sequences (list, string, range, etc.).",
                    "while loops repeat until condition becomes False.",
                    "match (Python 3.10+) is pattern matching, like switch but stronger.",
                ],
                example: `score = 78

if score >= 90:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")

for i in range(3):
    print(i)

n = 3
while n > 0:
    n -= 1

# match (Python 3.10+)
status = 404

match status:
    case 200:
        print("OK")
    case 404:
        print("Not Found")
    case _:
        print("Other")`,
                note: "Python uses indentation instead of braces. Indentation is the structure.",
            },
            {
                id: "break-and-continue",
                icon: <FiSlash />,
                title: "break and continue",
                summary:
                    "break stops the loop. continue skips the current iteration.",
                points: [
                    "break exits the loop immediately.",
                    "continue jumps to the next iteration.",
                    "Both are used inside for and while loops.",
                ],
                example: `for i in range(1, 6):
    if i == 3:
        continue
    if i == 5:
        break
    print(i)

# Output:
# 1
# 2
# 4`,
                note: "Use them for clean loop control, but do not abuse them. Keep loops readable.",
            },
            {
                id: "pass-statement",
                icon: <FiTerminal />,
                title: "pass statement",
                summary:
                    "pass is a placeholder that does nothing, used when syntax requires a block.",
                points: [
                    "Useful while building code step-by-step.",
                    "Common in empty functions, classes, or conditional branches.",
                    "It keeps the program valid without adding behavior.",
                ],
                example: `def todo():
    pass

class Draft:
    pass

if True:
    pass`,
                note: "pass is not a 'skip'. It is literally an empty statement.",
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
                            <FiTerminal />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Foundations</div>
                            <div className="subtitle">
                                This builds syntax muscle memory
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
                            Foundations means you can write Python without
                            thinking about syntax. Clean basics first, then the
                            advanced stuff becomes easy.
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

export default Foundations;
