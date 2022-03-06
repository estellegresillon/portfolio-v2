import styled from "styled-components";

import { CAREER } from "utils";

const Experiences = () => (
  <ExperiencesWrapper>
    {CAREER.map((experience) => (
      <div key={experience.title} className="section-one-facts">
        <div className="section-one-facts-inner">
          <div className="description-wrapper">
            <div className="description-top">
              <p>
                {experience.date} - {experience.title}
              </p>
            </div>
            <div className="description-bottom">
              <p>{experience.type}</p>
              <p>ReactJs / Typescript / Hooks / Context</p>
            </div>
          </div>
          <div className="img-wrapper">
            <img alt={experience.title} src={`${experience.title}.png`} />
          </div>
        </div>
      </div>
    ))}
  </ExperiencesWrapper>
);

export default Experiences;

const ExperiencesWrapper = styled.div`
  .section-one-facts {
    height: 100vh;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;

    &:first-child {
      background: #f0ac8e;
    }

    &:nth-child(2) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 50px);
      }
    }

    &:nth-child(3) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 100px);
      }
    }

    &:nth-child(4) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 150px);
      }
    }

    .section-one-facts-inner {
      display: flex;
      font-size: 16px;
      height: 100%;
      text-align: right;
      width: 100vw;

      .description-wrapper {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        width: 50%;

        .description-top {
          font-size: 36px;
          font-weight: bolder;
          margin: 5vh 10%;
          white-space: nowrap;
        }

        .description-bottom {
          align-items: flex-end;
          background: #f0ac8e;
          display: flex;
          flex-direction: column;
          font-size: 24px;
          height: 30%;
          justify-content: flex-end;
          padding: 10vh 10%;
          width: 100%;
        }
      }

      .img-wrapper {
        background: #d4edf2;
        height: 100%;
        overflow: hidden;
        width: 50vw;

        img {
          -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: 1s all ease;
          width: 100%;

          &:hover {
            webkit-filter: none;
            filter: none;
            opacity: 1;
          }
        }
      }
    }
  }
`;