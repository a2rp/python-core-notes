import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 60;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid var(--color-border-light);
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-primary);
    box-shadow: 0 8px 22px var(--color-shadow);
    transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
    &:hover,
    &:focus-visible {
        border-color: var(--color-primary);
        box-shadow: 0 0 18px color-mix(in srgb, var(--color-primary) 25%, transparent);
        text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 35%, transparent);
    }
    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 3px;
    }
`;

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const area = document.getElementById("python-scroll");
        if (!area) return undefined;
        const update = () => setVisible(area.scrollTop > 320);
        area.addEventListener("scroll", update, { passive: true });
        update();
        return () => area.removeEventListener("scroll", update);
    }, []);

    if (!visible) return null;
    return (
        <Button type="button" aria-label="Scroll to top" title="Scroll to top" onClick={() => document.getElementById("python-scroll")?.scrollTo({ top: 0, behavior: "smooth" })}>
            <FiArrowUp aria-hidden="true" />
        </Button>
    );
}
