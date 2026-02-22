import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiAlertTriangle,
    FiShield,
    FiCheckCircle,
    FiCornerDownRight,
    FiArrowUpCircle,
    FiLayers,
    FiXCircle,
} from "react-icons/fi";

const ErrorHandling = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "try",
                icon: <FiShield />,
                title: "try",
                summary: "try defines a block where an exception might happen.",
                points: [
                    "Put risky code inside try, like file reading, parsing, network calls.",
                    "If an exception happens inside try, Python jumps to the matching except block.",
                    "If no exception happens, except blocks are skipped.",
                ],
                example: `try:
    x = int("12")
    print(x)
except ValueError:
    print("Invalid number")`,
                note: "try is not for normal control flow. Use it only when failure is possible and expected.",
            },
            {
                id: "except",
                icon: <FiXCircle />,
                title: "except",
                summary:
                    "except catches exceptions and prevents the program from crashing.",
                points: [
                    "Catch specific exceptions whenever possible (ValueError, KeyError, etc.).",
                    "You can catch multiple exceptions in a tuple.",
                    "You can capture the exception object using as e.",
                ],
                example: `try:
    num = int("12x")
except ValueError as e:
    print("Conversion failed:", e)

try:
    d = {"a": 1}
    print(d["b"])
except (KeyError, TypeError):
    print("Key missing or wrong type")`,
                note: "Avoid bare except. It can hide real bugs and make debugging painful.",
            },
            {
                id: "else",
                icon: <FiCheckCircle />,
                title: "else",
                summary: "else runs only if no exception happens inside try.",
                points: [
                    "Use else for code that should run after try succeeds.",
                    "Keeps try block small and focused on the risky lines.",
                    "Helps avoid mixing success logic inside try.",
                ],
                example: `try:
    num = int("50")
except ValueError:
    print("Invalid number")
else:
    print("Converted value:", num)
    print("Now safe to use num")`,
                note: "Small try block + else for success path is a clean pattern.",
            },
            {
                id: "finally",
                icon: <FiCornerDownRight />,
                title: "finally",
                summary:
                    "finally runs no matter what, even if an exception occurs.",
                points: [
                    "Use finally for cleanup tasks like closing files, releasing locks, resetting state.",
                    "finally runs even if you return from try/except.",
                    "Context managers (with) are often better for cleanup, but finally is still important.",
                ],
                example: `f = None

try:
    f = open("data.txt", "r")
    data = f.read()
    print(data)
except FileNotFoundError:
    print("File not found")
finally:
    if f:
        f.close()
        print("File closed")`,
                note: "Prefer using with open(...) as f for files, but finally is universal cleanup.",
            },
            {
                id: "raise",
                icon: <FiArrowUpCircle />,
                title: "raise",
                summary: "raise is used to throw an exception intentionally.",
                points: [
                    "Use raise when input is invalid or when a rule is broken.",
                    "You can raise built-in exceptions (ValueError, TypeError).",
                    "You can re-raise the same exception inside except by using raise alone.",
                ],
                example: `def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

try:
    set_age(-1)
except ValueError as e:
    print("Error:", e)

try:
    int("x")
except ValueError:
    print("failed, re-raising now")
    raise`,
                note: "Raise early, fail fast. It keeps bugs close to the cause.",
            },
            {
                id: "custom-exceptions",
                icon: <FiAlertTriangle />,
                title: "Custom exceptions",
                summary:
                    "Custom exceptions help you express domain errors clearly.",
                points: [
                    "Create a custom exception by subclassing Exception.",
                    "Use custom exceptions for business rules (PaymentError, ValidationError).",
                    "They make error handling more readable and specific.",
                ],
                example: `class ValidationError(Exception):
    pass

def validate_username(name):
    if len(name) < 3:
        raise ValidationError("username must be at least 3 characters")

try:
    validate_username("ab")
except ValidationError as e:
    print("Validation failed:", e)`,
                note: "Name your custom exception based on the domain, not the technical detail.",
            },
            {
                id: "exception-hierarchy",
                icon: <FiLayers />,
                title: "Exception hierarchy",
                summary:
                    "Exceptions follow an inheritance chain. Catching a base class catches all derived ones.",
                points: [
                    "BaseException is the top-level base (SystemExit, KeyboardInterrupt live here).",
                    "Exception is the common base for most application errors.",
                    "Specific exceptions inherit from Exception (ValueError, KeyError, TypeError).",
                    "Catch the most specific first, then broader if needed.",
                ],
                example: `try:
    x = 1 / 0
except ZeroDivisionError:
    print("Specific: division by zero")
except Exception:
    print("General: some other exception")

# Common rule:
# except Exception is safer than bare except
# because it will not catch KeyboardInterrupt, SystemExit, etc.`,
                note: "Catch specific exceptions first. Broad catches should be last and intentional.",
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
                            <FiAlertTriangle />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Error Handling</div>
                            <div className="subtitle">
                                Write safe code without hiding bugs
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
                            Error handling is about control. You decide what to
                            do when something fails instead of letting the
                            program crash. Catch specific exceptions and keep
                            the risky code small.
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

export default ErrorHandling;
