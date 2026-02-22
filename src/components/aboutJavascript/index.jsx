import React from "react";
import { Styled } from "./styled";

const AboutJavascript = () => {
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
                <h2 className="heading">About JavaScript</h2>

                <p>
                    JavaScript is the programming language of the web. It adds
                    logic and behavior to HTML and CSS. While HTML structures
                    content and CSS styles it, JavaScript controls interaction,
                    state, dynamic updates, and application flow.
                </p>

                <p>
                    JavaScript runs inside an engine that parses code, creates
                    execution contexts, manages memory, and processes the event
                    loop. Concepts like scope, closures, prototypes,
                    asynchronous execution, and promises are fundamental to
                    writing predictable and maintainable applications.
                </p>

                <p>
                    The javascript-core-notes project is a structured revision
                    system. It organizes language fundamentals, execution
                    concepts, DOM manipulation, and modern ES6+ features into a
                    clean single-page reference designed for fast recall and
                    strong conceptual clarity.
                </p>

                <div className="meta">
                    <span className="metaLabel">Last updated:</span>
                    <span className="metaValue">{formattedDateTime}</span>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutJavascript;
