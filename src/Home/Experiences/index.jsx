import styled from "styled-components";

import { CAREER } from "utils";

const Experiences = () => (
  <ExperiencesWrapper>
    {CAREER.map((experience) => (
      <div key={experience.title} className="section-one-facts">
        <div className="section-one-facts-inner">
          <div className="description-wrapper">
            <div className="description-top">
              {experience.title === "Wifirst" ? (
                <p>
                  <a id="career-section">
                    {experience.date} - {experience.title}
                  </a>
                </p>
              ) : (
                <p>
                  {experience.date} - {experience.title}
                </p>
              )}
            </div>
            <div className="description-bottom">
              {experience.skills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          </div>
          <div className="img-wrapper">
            <img alt={experience.title} src={`${experience.title}.jpeg`} />
          </div>
        </div>
      </div>
    ))}
  </ExperiencesWrapper>
);

export default Experiences;

const ExperiencesWrapper = styled.div`
  z-index: 15;

  .section-one-facts {
    height: 105vh;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;

    &:first-child {
      background: #1b1b1b;
    }

    &:nth-child(2) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 70px);
      }
    }

    &:nth-child(3) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 140px);
      }
    }

    &:nth-child(4) {
      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: calc(5vh + 210px);
      }
    }

    @media screen and (max-width: 820px) {
      background: #1b1b1b;
      height: auto;
      z-index: 3;

      .section-one-facts-inner .description-wrapper .description-top {
        margin-top: 10vh !important;
      }
    }

    .section-one-facts-inner {
      display: flex;
      font-size: 16px;
      height: 100%;
      text-align: right;
      width: 100vw;

      @media screen and (max-width: 820px) {
        flex-direction: column-reverse;
        height: auto;
      }

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
          background: #1b1b1b;
          display: flex;
          flex-direction: column;
          font-size: 24px;
          height: 30%;
          justify-content: flex-end;
          padding: 15vh 10%;
          width: 100%;

          p {
            font-size: 20px;
            margin-bottom: 15px;
            width: 80%;
          }
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

      @media screen and (max-width: 820px) {
        .img-wrapper {
          height: 20vh;
          width: 100%;
        }

        .description-wrapper {
          justify-content: flex-start;
          height: 80vh;
          width: 100%;

          .description-bottom {
            height: auto;
            margin: 0;
            padding: 0 10%;

            p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
