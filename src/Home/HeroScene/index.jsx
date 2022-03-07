import styled from "styled-components";

const HeroScene = () => (
  <HeroSceneWrapper>
    <h1>ReactJs Frontend Developer</h1>
    <div className="hero-left">
      <video src="video2.mp4" autoPlay loop muted>
        <img
          src="video2-placeholder.jpeg"
          alt="video not supported"
          title="Your browser does not support the <video> tag"
        />
      </video>
    </div>
    <div className="hero-right"></div>
    <div className="scroll-animation">
      <div className="mouse-scroll-ball" />
    </div>
  </HeroSceneWrapper>
);

export default HeroScene;

const HeroSceneWrapper = styled.div`
  align-items: center;
  background: #f8beb7;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-bottom: 250px;
  position: relative;
  text-align: center;
  width: 100vw;

  h1 {
    font-size: 113px;
    font-family: "Voyage";
    position: absolute;
    width: 80%;
  }

  .hero-left {
    overflow: hidden;

    video {
      height: 100%;
      width: 177.77777778vh;
    }
  }

  .hero-left,
  .hero-right {
    width: 50%;
    height: 100vh;
  }

  @keyframes scrollBall {
    from {
      margin-top: 10px;
    }
    80% {
      margin-top: 30px;
    }
    to {
      margin-top: 10px;
    }
  }

  .scroll-animation {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 21px;
    height: 40px;
    bottom: 5vh;
    left: calc(50vw - 13px);
    border: 3px solid white;
    border-radius: 32px;

    .mouse-scroll-ball {
      width: 6px;
      height: 6px;
      margin-top: 10px;
      border-radius: 50%;
      background-color: white;
      animation: 4s scrollBall infinite;
    }
  }

  @media screen and (max-width: 820px) {
    h1 {
      font-size: 64px;
    }

    .hero-right {
      display: none;
    }

    .hero-left {
      width: 100%;
    }
  }
`;
