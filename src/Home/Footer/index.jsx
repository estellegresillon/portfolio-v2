import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <footer>
      <section>hi</section>
    </footer>
    <div className="below-footer">below footer</div>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  footer {
    height: 70vh;
    width: 100vw;
    background: url(clouds5.jpeg);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .below-footer {
    height: 50vh;
    background: #5bacba;
    width: 100%;
  }
`;
