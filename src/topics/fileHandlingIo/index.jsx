import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiFolder,
    FiFileText,
    FiEdit3,
    FiPlusSquare,
    FiShield,
    FiCode,
    FiGrid,
} from "react-icons/fi";

const FileHandlingIo = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "open",
                icon: <FiFolder />,
                title: "open",
                summary:
                    "open() opens a file and returns a file object. You choose mode like read, write, append.",
                points: [
                    "Basic signature: open(path, mode, encoding=...)",
                    "Common modes: 'r' read, 'w' write (overwrite), 'a' append, 'rb' binary read",
                    "Always prefer using encoding='utf-8' for text files",
                ],
                example: `# open a file for reading
f = open("notes.txt", "r", encoding="utf-8")
data = f.read()
f.close()

print(data)`,
                note: "If you forget close(), file handle can remain open longer than needed.",
            },
            {
                id: "read",
                icon: <FiFileText />,
                title: "read",
                summary:
                    "Reading means getting file content into your program.",
                points: [
                    "read() reads the entire file as one string (careful for huge files)",
                    "readline() reads one line at a time",
                    "readlines() reads all lines into a list",
                ],
                example: `f = open("notes.txt", "r", encoding="utf-8")

all_text = f.read()
print(all_text)

f.close()`,
                note: "For large files, prefer line-by-line iteration instead of read().",
            },
            {
                id: "write",
                icon: <FiEdit3 />,
                title: "write",
                summary:
                    "write() writes text to a file. Mode 'w' overwrites existing content.",
                points: [
                    "Mode 'w' creates the file if it does not exist",
                    "Mode 'w' clears old content before writing new content",
                    "write() does not add newline automatically, you must add '\\n' yourself",
                ],
                example: `f = open("output.txt", "w", encoding="utf-8")
f.write("Line 1\\n")
f.write("Line 2\\n")
f.close()`,
                note: "If you run this again, output.txt will be overwritten from scratch.",
            },
            {
                id: "append",
                icon: <FiPlusSquare />,
                title: "append",
                summary:
                    "Append adds new content at the end of an existing file using mode 'a'.",
                points: [
                    "Mode 'a' creates the file if it does not exist",
                    "Mode 'a' does not delete old content",
                    "Useful for logs and incremental saves",
                ],
                example: `f = open("log.txt", "a", encoding="utf-8")
f.write("New log line\\n")
f.close()`,
                note: "Append is safer than write when you do not want to lose old data.",
            },
            {
                id: "with-context-manager",
                icon: <FiShield />,
                title: "with context manager",
                summary:
                    "with open(...) automatically closes the file, even if an error happens.",
                points: [
                    "Best practice for file handling",
                    "No need to manually call close()",
                    "Works for both reading and writing",
                ],
                example: `with open("notes.txt", "r", encoding="utf-8") as f:
    data = f.read()

print(data)`,
                note: "This is the cleanest and safest way to work with files in Python.",
            },
            {
                id: "json-read-write",
                icon: <FiCode />,
                title: "JSON read and write",
                summary:
                    "Use the json module to store and load structured data.",
                points: [
                    "json.dumps() converts Python object -> JSON string",
                    "json.loads() converts JSON string -> Python object",
                    "json.dump() writes JSON to a file, json.load() reads JSON from a file",
                ],
                example: `import json

data = {
    "name": "Ash",
    "role": "Developer",
    "skills": ["React", "Node", "Python"]
}

# write json
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

# read json
with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)

print(loaded["name"])`,
                note: "Always store JSON using utf-8 and indent=4 for readability in notes projects.",
            },
            {
                id: "csv-basics",
                icon: <FiGrid />,
                title: "CSV basics",
                summary:
                    "CSV is a simple table format. Use csv module for correct parsing and writing.",
                points: [
                    "csv.reader reads rows as lists",
                    "csv.DictReader reads rows as dictionaries using headers",
                    "csv.writer and csv.DictWriter write CSV correctly with commas and quoting",
                ],
                example: `import csv

# writing a csv
rows = [
    ["name", "score"],
    ["Ash", 90],
    ["Neha", 95],
]

with open("scores.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

# reading a csv
with open("scores.csv", "r", newline="", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)`,
                note: "newline='' is recommended for CSV on Windows to avoid blank lines.",
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
                            <FiFolder />
                        </div>

                        <div className="titleBlock">
                            <div className="title">File Handling and IO</div>
                            <div className="subtitle">
                                Read, write, store structured data safely
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
                            File IO is a core skill for scripts, automation, and
                            backend work. Use with open(...) whenever possible
                            to avoid file handle leaks.
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

export default FileHandlingIo;
