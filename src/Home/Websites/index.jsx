import styled from "styled-components";

import { WEBSITES } from "utils";

const Websites = () => (
  <WebsitesWrapper>
    {WEBSITES.map((website) => (
      <WebsiteWrapper key={website.name} $image={website.image}>
        <p>{website.name}</p>
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
`;

const WebsiteWrapper = styled.div`
  align-items: flex-end;
  background: #78bec8;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  color: black;
  cursor: pointer;
  display: flex;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  font-size: 36px;
  font-weight: bolder;
  height: 70vh;
  justify-content: flex-end;
  letter-spacing: 5px;
  margin-bottom: 10%;
  opacity: 0.4;
  text-transform: uppercase;
  transition: opacity 1s ease;
  width: 40%;

  &:hover {
    -webkit-filter: none;
    filter: none;
    opacity: 1;
  }

  &:nth-child(2n) {
    margin-left: 10%;
    margin-top: -35vh;
  }

  p {
    margin: 15px 20px;
  }
`;
