import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 20px;
        margin-bottom: 5px;
    `,

    Content: styled.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 46px;
        box-shadow: 0 12px 32px var(--color-shadow);
        position: relative;
        transform: translateY(0);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 52px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        .top {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 22px;
        }

        .badge {
            width: 46px;
            height: 46px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease,
                background 0.18s ease;

            svg {
                font-size: 20px;
            }
        }

        &:hover .badge {
            transform: scale(1.06) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .headText {
            min-width: 0;
        }

        .heading {
            font-size: 36px;
            margin-bottom: 6px;
            color: var(--color-primary);
            letter-spacing: 0.6px;
            font-weight: 900;
        }

        .sub {
            font-size: 14px;
            color: var(--color-text-muted);
            line-height: 1.65;
            max-width: 820px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 22px;
        }

        .card {
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px 18px 16px;
            box-shadow: 0 10px 24px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.22s ease,
                box-shadow 0.22s ease,
                border-color 0.22s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 38px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .ico {
            width: 34px;
            height: 34px;
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
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 16px;
            }
        }

        .card:hover .ico {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .card p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
            margin-bottom: 0;
        }

        .tips ul {
            padding-left: 18px;
            margin: 0;

            li {
                list-style: disc;
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.7;
                margin-bottom: 6px;
            }

            li:last-child {
                margin-bottom: 0;
            }
        }

        .meta {
            margin-top: 28px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 12px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-accent);
        }

        @media (max-width: 900px) {
            padding: 26px 18px;

            .heading {
                font-size: 30px;
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
