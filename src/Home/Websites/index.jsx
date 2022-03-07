import styled from "styled-components";

import { WEBSITES } from "utils";

const Websites = () => (
  <WebsitesWrapper>
    {WEBSITES.map((website) => (
      <WebsiteWrapper
        key={website.name}
        as="a"
        target="_blank"
        rel="noopener noreferer"
        href={website.link}
      >
        <ImageWrapper alt={website.name} $image={website.image} />
        <div className="title-exp">{website.name}</div>
      </WebsiteWrapper>
    ))}
  </WebsitesWrapper>
);

export default Websites;

const WebsitesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10%;
  width: 90%;
  position: relative;
  white-space: pre-line;

  a {
    color: white;
    text-decoration: none;
  }
`;

const WebsiteWrapper = styled.div`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  font-size: 56px;
  font-weight: bolder;
  height: 70vh;
  justify-content: flex-end;
  letter-spacing: 5px;
  margin-bottom: 10%;
  position: relative;
  text-align: right;
  text-transform: uppercase;
  width: 40%;

  &:nth-child(2n) {
    margin-left: 10%;
    margin-top: -35vh;
  }

  .title-exp {
    bottom: 0;
    margin: 15px 20px;
    position: absolute;
    right: 0;
    width: 80%;
  }

  @media screen and (max-width: 820px) {
    font-size: 36px;
    width: 90%;

    &:nth-child(2n) {
      margin-left: 0%;
      margin-top: auto;
    }
  }
`;

const ImageWrapper = styled.div`
  background: #78bec8;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  height: 100%;
  opacity: 0.2;
  transition: opacity 1s ease;
  width: 100%;

  &:hover {
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }
`;
