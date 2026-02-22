import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,

    Header: styled.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,

    Content: styled.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `,
};
