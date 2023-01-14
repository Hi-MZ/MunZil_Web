import styled from "styled-components";
import Logo from "../assets/LoginLogo.png";

export const LoginLogoNav = styled.nav`
  margin: 2rem auto;
  margin-top: 14rem;
  width: 10.75rem;
  height: 5.25rem;
  background-image: url(${Logo});
  background-size: cover;
`;

export const SignUpNav = styled.nav`
  margin: 2rem auto;
  margin-top: 14rem;
  text-align: center;
  font-size: 1.5rem;
  color: #f5b659;
`;

export const CusInput = styled.input`
  padding: 0.7rem;
  width: 20rem;
  display: block;
  border-radius: 2rem;
  margin: 1rem auto;
  border-color: #f5b659;
`;

export const SignInUpBtn = styled.button`
  box-shadow: none;
  display: block;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px soild;
  border-color: #f5b659;
`;
