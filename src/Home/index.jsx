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
            <div>A coder and UI lover</div>
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
      <div className="sticky-bottom">ReactJs - Typescript</div>
    </main>
    <Footer />
  </HomeWrapper>
);

export default Home;

const HomeWrapper = styled.div`
  color: white;

  main {
    background: #fecdb7;
    padding-bottom: 20vh;

    .section-one {
      font-size: 46px;

      .section-one-top-text {
        font-weight: bolder;
        height: auto;
        margin: 5% 0 0 5%;
        position: sticky;
        top: 4vh;
        z-index: 2;
      }

      .section-one-middle-text {
        font-weight: bolder;
        margin: 50vh 15% 200px 5%;
        position: sticky;
        top: 150px;
      }

      .more-infos {
        align-items: center;
        background: #fecdb7;
        display: flex;
        font-size: 36px;
        font-weight: bolder;
        justify-content: center;
        padding-top: 20vh;
        position: absolute;
        width: 100%;

        p {
          width: 70%;
        }
      }
    }

    .sticky-bottom {
      bottom: 5%;
      font-size: 16px;
      font-weight: bolder;
      letter-spacing: 2px;
      margin-right: 5%;
      margin-top: 50vh;
      position: sticky;
      text-align: end;
      text-transform: uppercase;
    }
  }
`;
