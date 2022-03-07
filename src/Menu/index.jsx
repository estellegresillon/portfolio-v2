import styled from "styled-components";

const Menu = () => (
  <MenuWrapper>
    <div className="project-logo">
      <Item>Estelle Grésillon</Item>
    </div>
    <div className="project-menu">
      <Item>
        <a href="#project-section">Projects</a>
      </Item>
      <Item>
        <a href="#career-section">Career</a>
      </Item>
      <Item>
        <a href="#contact-section">Contact</a>
      </Item>
    </div>
  </MenuWrapper>
);

export default Menu;

const MenuWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  color: white;
  display: flex;
  height: 90px;
  justify-content: space-between;
  left: 0;
  padding: 0 30px;
  position: absolute;
  top: 0;
  width: calc(100% - 60px);
  z-index: 2;

  .project-logo {
    font-size: 20px;
    font-weight: bolder;
    white-space: nowrap;
  }

  .project-menu {
    display: flex;
    font-size: 16px;
    white-space: nowrap;

    a {
      color: white;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 820px) {
    padding: 0 10px;
    width: calc(100% - 20px);

    .project-logo {
      font-size: 16px;
    }

    .project-menu {
      font-size: 12px;
    }
  }
`;

const Item = styled.div`
  cursor: pointer;
  margin: 20px;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 820px) {
    margin: 10px;
  }
`;
