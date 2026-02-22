import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiType,
    FiLock,
    FiTool,
    FiHash,
    FiZap,
    FiSlash,
    FiCpu,
    FiCheckCircle,
} from "react-icons/fi";

const StringsBasicDataTypes = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "string-creation",
                icon: <FiType />,
                title: "String creation",
                summary:
                    "Strings are sequences of Unicode characters. You can create them using quotes and common patterns.",
                points: [
                    "Use single quotes or double quotes for normal strings.",
                    "Use triple quotes for multi-line strings.",
                    "Use str() to convert other values into strings.",
                ],
                example: `name1 = "Python"
name2 = 'Core Notes'

multi = """Line 1
Line 2
Line 3"""

x = 10
print(str(x))`,
                note: "In Python, strings are Unicode by default (text safe).",
            },
            {
                id: "immutability",
                icon: <FiLock />,
                title: "Immutability",
                summary:
                    "Strings are immutable. You cannot change a string in place, you create a new one.",
                points: [
                    "Any operation that looks like changing a string actually creates a new string.",
                    "Immutability makes strings safe to share and cache.",
                    "Use lists or StringIO-like approaches when doing heavy concatenation in loops.",
                ],
                example: `s = "hello"
# s[0] = "H"  # error (strings are immutable)

s2 = "H" + s[1:]
print(s2)  # Hello`,
                note: "If you need many edits, build pieces and join them at the end.",
            },
            {
                id: "string-methods",
                icon: <FiTool />,
                title: "String methods",
                summary:
                    "Python provides many built-in methods for searching, cleaning, and transforming strings.",
                points: [
                    "Common: lower, upper, strip, replace, split, join.",
                    "Search: find, startswith, endswith, in operator.",
                    "Validation: isdigit, isalpha, isalnum, isspace.",
                ],
                example: `s = "  Python Core Notes  "

print(s.strip())              # remove outer spaces
print(s.lower())              # python core notes
print(s.replace("Core", "X")) # Python X Notes

parts = "a,b,c".split(",")
print(parts)                  # ['a', 'b', 'c']

print("-".join(parts))        # a-b-c

print("py" in "python")       # True
print("123".isdigit())        # True`,
                note: "Strings are everywhere. Knowing these methods saves time daily.",
            },
            {
                id: "f-strings",
                icon: <FiZap />,
                title: "f-strings",
                summary:
                    "f-strings are the cleanest way to format strings in modern Python.",
                points: [
                    "Prefix with f and use {variable} inside.",
                    "Supports expressions inside braces.",
                    "Supports formatting like decimals, padding, alignment.",
                ],
                example: `name = "Ash"
score = 93.456

print(f"Name: {name}")
print(f"Score: {score:.2f}")   # 93.46
print(f"Next: {score + 1:.1f}")`,
                note: "Prefer f-strings over old % formatting and string concatenation.",
            },
            {
                id: "escape-sequences",
                icon: <FiSlash />,
                title: "Escape sequences",
                summary:
                    "Escape sequences represent special characters like newline and tab inside strings.",
                points: [
                    "\\n = newline, \\t = tab, \\\\ = backslash, \\' = single quote, \\\" = double quote.",
                    "Use raw strings r'' for regex and Windows paths to avoid escaping.",
                ],
                example: `print("Line1\\nLine2")
print("Col1\\tCol2")

path1 = "C:\\\\Users\\\\Ash\\\\Docs"
path2 = r"C:\\Users\\Ash\\Docs"

print(path1)
print(path2)`,
                note: "Raw strings are very handy when working with regex and file paths.",
            },
            {
                id: "bytes-vs-str",
                icon: <FiCpu />,
                title: "bytes vs str",
                summary:
                    "str is text (Unicode). bytes is raw binary data. They are not the same.",
                points: [
                    "Use str for human-readable text.",
                    "Use bytes for files, network data, images, etc.",
                    "Convert using encode (str -> bytes) and decode (bytes -> str).",
                ],
                example: `text = "python"
b = text.encode("utf-8")   # str -> bytes
print(b)                   # b'python'

text2 = b.decode("utf-8")  # bytes -> str
print(text2)               # python`,
                note: "If you mix bytes and str, Python will throw TypeError. Convert intentionally.",
            },
            {
                id: "numeric-types",
                icon: <FiHash />,
                title: "Numeric types (int, float, complex)",
                summary:
                    "Python supports integers, floating point numbers, and complex numbers.",
                points: [
                    "int: unlimited precision (no fixed 32-bit/64-bit limit).",
                    "float: double precision (watch rounding errors).",
                    "complex: numbers like 2 + 3j, used in math/science domains.",
                ],
                example: `a = 10          # int
b = 10.5        # float
c = 2 + 3j      # complex

print(type(a))
print(type(b))
print(type(c))

print(0.1 + 0.2)           # 0.30000000000000004 (float behavior)
print((2 + 3j) * 2)        # (4+6j)`,
                note: "Float is not exact for some decimals. Use round() or decimal module when needed.",
            },
            {
                id: "boolean-logic",
                icon: <FiCheckCircle />,
                title: "Boolean logic",
                summary:
                    "Booleans are True/False. Python uses short-circuit logic with and/or.",
                points: [
                    "and returns the first falsy value or the last value.",
                    "or returns the first truthy value or the last value.",
                    "Falsy values include: 0, 0.0, '', [], {}, set(), None.",
                ],
                example: `print(True and False)   # False
print(True or False)    # True
print(not True)         # False

print("" or "fallback")     # fallback
print("ok" and "next")      # next

print(bool(0))              # False
print(bool("python"))       # True`,
                note: "Python and/or return values, not strictly True/False. This is useful for defaults.",
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
                            <FiType />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Strings and Basic Data Types
                            </div>
                            <div className="subtitle">
                                Core text handling and fundamental values
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
                            Strings and basic data types are used in almost
                            every Python program. If these fundamentals are
                            clear, everything else becomes easier.
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

export default StringsBasicDataTypes;
