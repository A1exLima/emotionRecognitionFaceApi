import { styled } from 'styled-components'

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 125rem;
  margin: 0 auto;
  padding: 13rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 5rem;

  > div:first-child {
    h1 {
      font-family: var(--font-Roboto);
      font-weight: 500;
      font-size: clamp(3.75rem, 7vw, 8rem);
      line-height: clamp(3.2rem, 6vw, 7.5rem);
      text-align: center;

      @media (min-width: 1261px) {
        text-align: left;
      }
    }

    p {
      font-family: var(--font-Archivo);
      font-weight: 300;
      font-size: clamp(1.4rem, 2.5vw, 2rem);
      line-height: clamp(3rem, 5vw, 5rem);
      letter-spacing: 0.44rem;
      text-align: center;

      @media (min-width: 1261px) {
        text-align: left;
      }
    }
  }

  > div:last-child {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: 1261px) {
      min-width: 69.8rem;
      gap: 5rem;
    }

    > article:first-child {
      display: flex;
      width: 100%;
      height: 39.2rem;
      border-radius: 1.4rem;
      background-color: ${({ theme }) => theme['default-text']};

      > div {
        position: relative;
        width: 100%;
        margin: 1rem;
        border-radius: 1.4rem;
        background-color: ${({ theme }) => theme['background-web-cam']};

        > video {
          border-radius: 1.4rem;
          width: inherit;
          height: 100%;
          object-fit: cover;
        }

        > canvas {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    > article:last-child {
      width: 100%;
      height: 12rem;
      border-radius: 1.4rem;
      background-color: ${({ theme }) => theme['default-text']};
      display: flex;
      align-items: center;
      justify-content: center;

      > p {
        color: ${({ theme }) => theme['text-expressions']};
        font-size: 2.6rem;
        font-family: var(--font-Archivo);
        font-weight: 600;

        > span {
          font-weight: 300;
        }
      }
    }
  }

  @media (max-width: 1260px) {
    margin-top: -5rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
