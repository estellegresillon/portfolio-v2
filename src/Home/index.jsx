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
              <a id="project-section">A coder and UI lover</a>
            </div>
            <div>building webapps for 4 years</div>
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
          <div className="sticky-bottom">Hooks - Typescript</div>
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
  color: white;

  main {
    background: #9ecfd6;
    padding-bottom: 20vh;

    @media screen and (max-width: 820px) {
      padding-bottom: 0;
    }

    .section-one {
      font-size: 46px;

      @media screen and (max-width: 820px) {
        font-size: 32px;
      }

      .section-one-top-text {
        font-weight: bolder;
        height: auto;
        margin: 5% 5% 0 5%;
        position: sticky;
        top: 4vh;
        z-index: 2;
      }

      .section-one-middle-text {
        font-weight: bolder;
        margin: 50vh 5% 200px 5%;
        position: sticky;
        top: 160px;
      }

      .more-infos {
        align-items: center;
        background: #ccc5d2;
        display: flex;
        font-size: 36px;
        font-weight: bolder;
        justify-content: center;
        padding: 15vh 0;
        position: absolute;
        width: 100%;

        p {
          width: 70%;
        }

        @media screen and (max-width: 820px) {
          font-size: 30px;
          position: relative;
          z-index: 4;
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
      position: sticky;
      text-align: end;
      text-transform: uppercase;
    }
  }
`;
