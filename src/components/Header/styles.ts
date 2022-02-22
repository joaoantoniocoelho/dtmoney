import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 10rem;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: none;
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
