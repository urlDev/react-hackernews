import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #ffd200 !important;
  height: 15rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NavbarBrand = styled(Link)`
  padding: 0;
  img {
    width: 5rem;
    margin: 5rem 0;
    @media (min-width: 300px) and (max-width: 575.9px) {
      margin-left: 2rem;
    }
  }
`;
