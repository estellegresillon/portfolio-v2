import styled from "styled-components";

import { SOCIAL_LINKS } from "utils";

const SocialLinks = ({ color }) => (
  <SocialLinksWrapper>
    {SOCIAL_LINKS.map((link) => (
      <a
        href={link.url}
        key={link.icon}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color,
        }}
      >
        <i aria-hidden="true" className={link.icon} />
      </a>
    ))}
  </SocialLinksWrapper>
);

export default SocialLinks;

const SocialLinksWrapper = styled.div`
  display: flex;
  font-size: 36px;
  justify-content: flex-end;
  margin-right: 10vw;
  margin-top: 30px;

  a {
    color: white;

    i {
      margin-left: 50px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
