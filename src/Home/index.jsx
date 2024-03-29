import styled from "styled-components";

import HeroScene from "./HeroScene";
import Websites from "./Websites";
import Experiences from "./Experiences";
import Footer from "./Footer";

const Home = () => (
  <HomeWrapper>
    <main>
      <HeroScene />
      <section className="section-one">
        <div className="section-one-container">
          <div className="section-one-top-text">
            <div>
              <a id="project-section">React - Vue - Typescript</a>
            </div>
            <div>Hooks / Composition API</div>
          </div>
          <Websites />
          <div className="section-one-middle-text">
            <div className="blank-space"></div>
            <div className="section-one-bottom-inner">
              <div>
                With my designer background, I code thinking about the design
                and with an understanding of the feasibility of the tech side.
              </div>
            </div>
          </div>
          <Experiences />
          <div className="section-one-facts more-infos">
            <p>
              With a passion for problem solving and design, my goal is to
              create websites and apps with a clean code, high quality UI and a
              compelling user experience.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </HomeWrapper>
);

export default Home;

const HomeWrapper = styled.div`
  main {
    background: black;
    padding-bottom: 20vh;

    @media screen and (max-width: 820px) {
      padding-bottom: 0;
    }

    .section-one {
      font-size: 32px;

      .section-one-top-text {
        line-height: 40px;
        font-size: 24px;
        height: auto;
        margin: 5% 5% 0 5%;
        position: sticky;
        top: 4vh;
        z-index: 1;
      }

      .section-one-middle-text {
        font-weight: bolder;
        margin: 55vh 5%;
        position: sticky;
        top: 130px;
        z-index: 1;
      }

      .more-infos {
        align-items: center;
        background: #1b1b1b;
        display: flex;
        font-size: 36px;
        justify-content: center;
        padding: 15vh 0;
        position: absolute;
        width: 100%;

        p {
          width: 70%;
        }

        @media screen and (max-width: 820px) {
          font-size: 24px;
          line-height: 53px;
          position: sticky;
          z-index: 10;
        }
      }
    }

    .sticky-bottom {
      bottom: 5%;
      font-size: 16px;
      font-weight: bolder;
      letter-spacing: 2px;
      margin-right: 5%;
      margin: 10vh 5%;
      pointer-events: none;
      position: sticky;
      text-align: end;
      text-transform: uppercase;
    }
  }
`;
