import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiBox,
    FiTool,
    FiUser,
    FiCpu,
    FiGitMerge,
    FiShuffle,
    FiLink2,
    FiCode,
    FiCheckCircle,
} from "react-icons/fi";

const ObjectOrientedProgramming = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "class-object",
                icon: <FiBox />,
                title: "Class and object",
                summary:
                    "Class is a blueprint. Object is a real instance created from the class.",
                points: [
                    "Class defines attributes (data) and methods (behavior).",
                    "Object is created by calling the class like a function.",
                    "Everything in Python is an object, even numbers and functions.",
                ],
                example: `class Car:
    pass

c = Car()
print(type(c))  # <class '__main__.Car'>`,
                note: "In Python, creating an object is usually: obj = ClassName().",
            },
            {
                id: "init",
                icon: <FiTool />,
                title: "__init__",
                summary:
                    "__init__ runs right after object creation and sets initial state.",
                points: [
                    "__init__ is not a constructor in the C++ sense, but it acts like an initializer.",
                    "self is the current instance passed automatically.",
                    "Use __init__ to set instance variables.",
                ],
                example: `class User:
    def __init__(self, name):
        self.name = name

u = User("Ash")
print(u.name)`,
                note: "__init__ runs after the object is created, to initialize it.",
            },
            {
                id: "instance-variables",
                icon: <FiUser />,
                title: "Instance variables",
                summary:
                    "Instance variables belong to each object. Every object gets its own copy.",
                points: [
                    "Defined using self.variable inside methods (usually inside __init__).",
                    "Different objects can store different values.",
                    "They represent the object's state.",
                ],
                example: `class Counter:
    def __init__(self):
        self.count = 0  # instance variable

a = Counter()
b = Counter()

a.count = 5
print(a.count)  # 5
print(b.count)  # 0`,
                note: "If it starts with self., it is tied to that object.",
            },
            {
                id: "class-variables",
                icon: <FiLayers />,
                title: "Class variables",
                summary:
                    "Class variables are shared across all objects of that class.",
                points: [
                    "Defined directly inside the class, not inside methods.",
                    "Useful for shared constants or counters.",
                    "If you reassign using self.var, you may create a new instance variable instead.",
                ],
                example: `class User:
    company = "A2RP"  # class variable

    def __init__(self, name):
        self.name = name

u1 = User("Ash")
u2 = User("Neha")

print(u1.company)  # A2RP
print(u2.company)  # A2RP`,
                note: "Access as ClassName.var for clarity when you mean shared data.",
            },
            {
                id: "methods",
                icon: <FiCode />,
                title: "Methods",
                summary:
                    "Methods are functions defined inside a class and usually operate on an object.",
                points: [
                    "Instance methods take self as first argument.",
                    "Class methods take cls as first argument and are marked with @classmethod.",
                    "Static methods do not take self or cls and are marked with @staticmethod.",
                ],
                example: `class Math:
    factor = 2

    def mul(self, x):
        return x * self.factor  # instance method

    @classmethod
    def make(cls):
        return cls()

    @staticmethod
    def add(a, b):
        return a + b

m = Math()
print(m.mul(5))        # 10
print(Math.add(2, 3))  # 5`,
                note: "Most of the time you will use instance methods.",
            },
            {
                id: "self-keyword",
                icon: <FiLink2 />,
                title: "self keyword",
                summary:
                    "self is the current object reference. Python passes it automatically.",
                points: [
                    "When you call obj.method(), Python translates it to Class.method(obj).",
                    "self is not a keyword, but a strong naming convention.",
                    "Without self, you cannot access instance state.",
                ],
                example: `class Demo:
    def show(self):
        print("self is:", self)

d = Demo()
d.show()
# internally: Demo.show(d)`,
                note: "Always keep self as the first parameter for instance methods.",
            },
            {
                id: "inheritance",
                icon: <FiGitMerge />,
                title: "Inheritance",
                summary:
                    "Inheritance allows a child class to reuse and extend a parent class.",
                points: [
                    "Use class Child(Parent) syntax.",
                    "Child inherits methods and can override them.",
                    "Helps reuse behavior but keep it simple and readable.",
                ],
                example: `class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Bark"

d = Dog()
print(d.speak())`,
                note: "Override methods when the child needs different behavior.",
            },
            {
                id: "multiple-inheritance",
                icon: <FiShuffle />,
                title: "Multiple inheritance",
                summary:
                    "Python allows a class to inherit from multiple parents.",
                points: [
                    "Powerful but can become confusing if overused.",
                    "Used in mixins and small capability-based composition.",
                    "MRO decides which parent method is chosen first.",
                ],
                example: `class A:
    def show(self):
        return "A"

class B:
    def show(self):
        return "B"

class C(A, B):
    pass

c = C()
print(c.show())  # A (because A is first in inheritance list)`,
                note: "Prefer mixins for multiple inheritance, not deep complex trees.",
            },
            {
                id: "mro",
                icon: <FiCpu />,
                title: "Method resolution order (MRO)",
                summary:
                    "MRO is the rule Python uses to decide which method to call in inheritance chains.",
                points: [
                    "You can inspect it using ClassName.mro() or ClassName.__mro__.",
                    "Python uses C3 linearization for consistent method lookup.",
                    "MRO matters most in multiple inheritance.",
                ],
                example: `class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.mro())`,
                note: "If you do multiple inheritance, always understand MRO.",
            },
            {
                id: "super",
                icon: <FiLink2 />,
                title: "super()",
                summary:
                    "super() calls the next method in the MRO, usually the parent version.",
                points: [
                    "Common in __init__ to initialize parent attributes.",
                    "In multiple inheritance, super() follows MRO, not 'direct parent'.",
                    "Use super() for cooperative inheritance design.",
                ],
                example: `class Base:
    def __init__(self, name):
        self.name = name

class User(Base):
    def __init__(self, name, role):
        super().__init__(name)
        self.role = role

u = User("Ash", "dev")
print(u.name, u.role)`,
                note: "super() is clean and future-proof when inheritance expands.",
            },
            {
                id: "polymorphism",
                icon: <FiShuffle />,
                title: "Polymorphism",
                summary:
                    "Polymorphism means different objects can be used through the same interface.",
                points: [
                    "Python supports polymorphism naturally through duck typing.",
                    "If objects provide the needed method, they can be used interchangeably.",
                    "Helps write flexible and reusable code.",
                ],
                example: `class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Bark"

def talk(animal):
    print(animal.speak())

talk(Cat())
talk(Dog())`,
                note: "Same function, different object types, same behavior contract.",
            },
            {
                id: "duck-typing",
                icon: <FiCheckCircle />,
                title: "Duck typing",
                summary:
                    "If it behaves like a duck, treat it like a duck. Python cares about behavior, not type.",
                points: [
                    "Python checks methods and attributes at runtime.",
                    "You often avoid heavy type checks and rely on capabilities.",
                    "This is why interfaces are not required for polymorphism in Python.",
                ],
                example: `def print_len(x):
    print(len(x))

print_len([1, 2, 3])
print_len("python")
print_len({"a": 1, "b": 2})`,
                note: "Duck typing is powerful, but always write clear error messages and tests.",
            },
            {
                id: "dunder-methods",
                icon: <FiTool />,
                title: "Dunder methods (__str__, __repr__, __len__)",
                summary:
                    "Dunder methods customize how objects behave with built-in functions and operators.",
                points: [
                    "__str__ gives user-friendly text (print).",
                    "__repr__ gives developer-friendly representation (debugging).",
                    "__len__ allows len(obj).",
                ],
                example: `class Bag:
    def __init__(self, items):
        self.items = items

    def __str__(self):
        return "Bag with " + str(len(self.items)) + " items"

    def __repr__(self):
        return "Bag(items=" + repr(self.items) + ")"

    def __len__(self):
        return len(self.items)

b = Bag([1, 2, 3])
print(str(b))
print(repr(b))
print(len(b))`,
                note: "Dunder methods make your classes feel like built-in types.",
            },
            {
                id: "dataclasses",
                icon: <FiLayers />,
                title: "Dataclasses",
                summary:
                    "Dataclasses reduce boilerplate for classes that mainly store data.",
                points: [
                    "Auto-generates __init__, __repr__, and comparison methods.",
                    "Cleaner than writing everything manually.",
                    "Best for simple models and structured data.",
                ],
                example: `from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int

u = User("Ash", 25)
print(u)`,
                note: "Dataclasses are perfect when your class is mostly data + simple rules.",
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
                            <FiLayers />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Object Oriented Programming
                            </div>
                            <div className="subtitle">
                                Python version of OOP is slightly different
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
                            Python OOP is practical. It supports inheritance and
                            polymorphism, but also encourages simple, flexible
                            designs using duck typing and clean data models.
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

export default ObjectOrientedProgramming;
