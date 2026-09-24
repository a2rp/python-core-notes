import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 50;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-bg) 92%, transparent);
        box-shadow: 0 8px 22px var(--color-shadow);
        backdrop-filter: blur(12px);
    `,
    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        .logoNameThemeToggleWrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
        }
        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }
        .logoWrapper {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            flex: 0 0 auto;
            overflow: hidden;
            padding: 5px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: #000;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: opacity 180ms ease;
            }
            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
            }
        }
        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
            .title {
                overflow: hidden;
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .subTitle {
                overflow: hidden;
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            @media (max-width: 520px) { .subTitle { display: none; } }
            @media (max-width: 420px) { .nameWrapper { display: none; } }
        }
        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface);
            color: var(--color-text-primary);
            transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
            .icon { display: inline-flex; font-size: 18px; }
            .label { color: var(--color-text-secondary); font-size: 13px; font-weight: 700; }
            &:hover,
            &:focus-visible {
                border-color: var(--color-border-light);
                box-shadow: 0 0 16px color-mix(in srgb, var(--color-primary) 22%, transparent);
                text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 35%, transparent);
            }
            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
            @media (max-width: 420px) { .label { display: none; } }
        }
    `,
};
