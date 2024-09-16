import { styled } from 'styled-components'

export const ContainerFooter = styled.footer`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  white-space: nowrap;
  padding-top: 3rem;

  > div {
    display: flex;
    gap: 0.8rem;

    > p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-Roboto);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 125%;
    }

    > span {
      font-weight: 600;
      text-align: center;
      font-family: var(--font-Roboto);

      > a {
        font-size: 1.8rem;
        text-decoration: none;
        color: inherit;
      }
    }
  }

  @media (max-width: 520px) {
    padding-bottom: 2rem;

    > div {
      > p:last-child {
        display: none;
      }
    }
  }
`
