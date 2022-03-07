import styled from "styled-components";

import SocialLinks from "./SocialLinks";

const Footer = () => (
  <FooterWrapper>
    <p>
      <a id="contact-section">Estelle Grésillon</a>
    </p>
    <p>ReactJs Front-end Developer</p>
    <p>estelle.gresillon@gmail.com</p>
    <SocialLinks />
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  align-items: flex-end;
  background: url(clouds5.jpeg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-size: 48px;
  font-weight: bolder;
  height: 65vh;
  justify-content: center;
  margin-top: 20vh;
  width: 100vw;

  p {
    margin-bottom: 10px;
    margin-right: 10vw;
  }
`;
