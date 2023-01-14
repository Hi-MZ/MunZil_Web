import styled from "styled-components";
import Home from "../assets/Home.png";
import Add from "../assets/Add.png";
import Play from "../assets/Play.png";
import User from "../assets/User.png";
import InHome from "../assets/InHome.png";
import InAdd from "../assets/InAdd.png";
import InPlay from "../assets/InPlay.png";
import InUser from "../assets/InUser.png";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4.125rem;
  justify-content: center;
`;

export const MainFooter = styled.nav`
  width: 24.375rem;
  height: 100%;
  border-radius: 0.625rem 0.625rem 0 0;
  box-shadow: 0 -0.25rem 0.2rem rgba(1, 1, 1, 0.1);
  display: flex;
`;

export const Space = styled.nav`
  width: 18rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const FooterIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: auto 0;
  background-image: url(${(props) => {
    switch (props.value) {
      case "Home":
        return Home;
      case "InHome":
        return InHome;
      case "Add":
        return Add;
      case "InAdd":
        return InAdd;
      case "Play":
        return Play;
      case "InPlay":
        return InPlay;
      case "User":
        return User;
      case "InUser":
        return InUser;
    }
  }});
  background-size: cover;
`;
