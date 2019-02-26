import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: blanchedalmond;
  margin-bottom: 2rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.5rem;
  img {
    margin-bottom: 0;
    width: 100px;
  }
`;

import gatsbyLogo from "../images/logo.png";

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img src={gatsbyLogo} alt="Cloudsnap Logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
