import React from "react";
import { Styled } from "./styled";
import {
    FiTerminal,
    FiLayers,
    FiZap,
    FiPackage,
    FiChevronRight,
} from "react-icons/fi";

const AboutPython = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <div className="top">
                    <div className="badge">
                        <FiTerminal />
                    </div>

                    <div className="headText">
                        <h2 className="heading">About Python</h2>
                        <p className="sub">
                            A clean, single-page revision system for core Python
                            concepts.
                        </p>
                    </div>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="ico">
                                <FiZap />
                            </span>
                            What is Python
                        </div>
                        <p>
                            Python is a high-level, interpreted programming
                            language known for readability and fast development.
                            It is widely used in web development, scripting,
                            automation, data work, and tooling.
                        </p>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="ico">
                                <FiLayers />
                            </span>
                            Execution model
                        </div>
                        <p>
                            Python code runs inside the CPython interpreter
                            (most common). It compiles source code into bytecode
                            and executes it using a virtual machine. Concepts
                            like references, mutability, and scope rules are key
                            for writing predictable code.
                        </p>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="ico">
                                <FiPackage />
                            </span>
                            Project goal
                        </div>
                        <p>
                            The python-core-notes project organizes essential
                            syntax, core data structures, functions, OOP,
                            exceptions, generators, modules, file handling, and
                            Pythonic best practices into a structured,
                            expandable single page.
                        </p>
                    </div>

                    <div className="card tips">
                        <div className="cardTitle">
                            <span className="ico">
                                <FiChevronRight />
                            </span>
                            How to use
                        </div>

                        <ul>
                            <li>Use search to jump to topics quickly.</li>
                            <li>Expand sections, scan bullets, move on.</li>
                            <li>Focus on patterns and common traps.</li>
                        </ul>
                    </div>
                </div>

                <div className="meta">
                    <span className="metaLabel">Last build:</span>
                    <span className="metaValue">{formattedDateTime} hrs</span>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutPython;
