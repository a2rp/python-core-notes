import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiPackage,
    FiDownload,
    FiLink2,
    FiCommand,
    FiShuffle,
    FiFileText,
    FiFolder,
    FiPlay,
} from "react-icons/fi";

const ModulesAndPackages = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "import-basics",
                icon: <FiDownload />,
                title: "import basics",
                summary:
                    "import loads code from another module so you can reuse functions, classes, and variables.",
                points: [
                    "A module is usually a single .py file.",
                    "import module gives access using module.name",
                    "Imports help you organize code and avoid copy-paste.",
                ],
                example: `# math is a standard library module
import math

print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.14159...`,
                note: "Tip - importing a module runs its top-level code once (when first imported).",
            },
            {
                id: "from-import",
                icon: <FiLink2 />,
                title: "from import",
                summary:
                    "from module import name lets you import specific things without module prefix.",
                points: [
                    "Use when you only need a few items from a module.",
                    "Avoid importing too many names, it can reduce clarity.",
                    "You can import multiple names in one line.",
                ],
                example: `from math import sqrt, pi

print(sqrt(25))   # 5.0
print(pi)         # 3.14159...`,
                note: "Rule - prefer explicit imports. Avoid wildcard imports in real projects.",
            },
            {
                id: "aliasing",
                icon: <FiShuffle />,
                title: "Aliasing",
                summary:
                    "Aliasing renames an import, commonly used to shorten long module names.",
                points: [
                    "Use 'as' for aliasing: import numpy as np",
                    "Aliases improve readability when module names are long.",
                    "Be consistent with common aliases (np, pd, plt).",
                ],
                example: `import math as m

print(m.sqrt(49))   # 7.0`,
                note: "Good aliasing is standard. Weird aliasing confuses everyone.",
            },
            {
                id: "name-main",
                icon: <FiPlay />,
                title: '__name__ == "__main__"',
                summary:
                    "This pattern prevents code from running on import. It runs only when the file is executed directly.",
                points: [
                    "__name__ is a special variable set by Python.",
                    'When you run a file: __name__ becomes "__main__".',
                    "When you import a file: __name__ becomes the module name.",
                ],
                example: `# file: app.py
def run():
    print("Running app logic")

if __name__ == "__main__":
    run()

# If you run: python app.py -> it prints
# If you import app in another file -> it does NOT auto run`,
                note: "This is one of the most important patterns for clean Python modules.",
            },
            {
                id: "creating-modules",
                icon: <FiFileText />,
                title: "Creating modules",
                summary:
                    "Any .py file can be a module. Put reusable logic in it and import it elsewhere.",
                points: [
                    "Create a file like utils.py with helper functions.",
                    "Import it in main file and call its functions.",
                    "Keep module names lowercase and readable.",
                ],
                example: `# file: utils.py
def add(a, b):
    return a + b

# file: main.py
import utils

print(utils.add(2, 3))  # 5`,
                note: "Split code by responsibility. One big file becomes painful quickly.",
            },
            {
                id: "package-structure",
                icon: <FiFolder />,
                title: "Package structure",
                summary:
                    "A package is a folder that groups multiple modules together.",
                points: [
                    "A package is typically a directory containing Python files.",
                    "Modern Python supports namespace packages, but commonly you will see __init__.py.",
                    "__init__.py can expose package-level imports and setup.",
                ],
                example: `project/
  app/
    __init__.py
    main.py
    utils.py

# file: app/main.py
from app.utils import add`,
                note: "Packages help scale projects. Modules are good for small pieces.",
            },
            {
                id: "virtual-environments",
                icon: <FiCommand />,
                title: "Virtual environments",
                summary:
                    "A virtual environment isolates project dependencies so they don't clash with other projects.",
                points: [
                    "Every project should have its own environment.",
                    "venv creates a local environment folder with Python + installed packages.",
                    "Activate it before installing packages.",
                ],
                example: `# Create venv
python -m venv .venv

# Activate (Windows)
.venv\\Scripts\\activate

# Activate (Mac/Linux)
source .venv/bin/activate

# Deactivate
deactivate`,
                note: "This prevents the 'it works on my system' dependency mess.",
            },
            {
                id: "pip-basics",
                icon: <FiPackage />,
                title: "pip basics",
                summary: "pip installs and manages Python packages from PyPI.",
                points: [
                    "Install a package: pip install requests",
                    "See installed packages: pip list",
                    "Freeze dependencies: pip freeze > requirements.txt",
                    "Install from file: pip install -r requirements.txt",
                ],
                example: `pip install requests
pip list
pip freeze > requirements.txt
pip install -r requirements.txt`,
                note: "In real projects, always commit requirements.txt (or use pyproject.toml if using modern tooling).",
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
                            <div className="title">Modules and Packages</div>
                            <div className="subtitle">
                                Organize code, reuse logic, manage dependencies
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
                            This section is about writing Python like a real
                            project. Imports, packages, venv, and pip are what
                            make your code reusable and deployable.
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

export default ModulesAndPackages;
