import { useEffect } from "react";
import styled from "styled-components";

const HeroScene = () => {
  useEffect(() => {
    const video = document.getElementById("myVideo");

    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();
    };
  }, []);

  return (
    <HeroSceneWrapper>
      <div className="hero-title">
        <h1>React & Vue Developer</h1>
        <h2>I'm a coder and UI lover building webapps for 5 years</h2>
      </div>
      <div className="hero-left">
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          id="myVideo"
          src="video2.mp4"
        >
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
};

export default HeroScene;

const HeroSceneWrapper = styled.div`
  align-items: center;
  background: black;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-bottom: 250px;
  position: relative;
  width: 100vw;

  .hero-title {
    letter-spacing: normal;
    position: absolute;
  }

  h1 {
    font-size: 90px;
    font-family: "Voyage";
  }

  .hero-left {
    overflow: hidden;

    video {
      filter: contrast(300%) grayscale(100%);
      height: 100%;
      opacity: 20%;
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
    border: 3px solid #ccc;
    border-radius: 32px;

    .mouse-scroll-ball {
      width: 6px;
      height: 6px;
      margin-top: 10px;
      border-radius: 50%;
      background-color: #ccc;
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
