import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px;
        /* margin-bottom: 30px; */
    `,

    Content: styled.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 4px solid var(--color-primary);
        border-radius: 18px;
        padding: 42px;
        box-shadow: 0 10px 30px var(--color-shadow);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 40px var(--color-shadow);
        }

        .heading {
            font-size: 32px;
            margin-bottom: 26px;
            color: var(--color-primary);
            letter-spacing: 0.5px;
        }

        p {
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 18px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 30px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 700;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-primary);
        }
    `,
};
