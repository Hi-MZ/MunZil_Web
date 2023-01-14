import styled from "styled-components";

export const TopNavbar = styled.nav`
  width: 100%;
  padding-top: 2.5rem;
  height: 3rem;
  display: flex;
`;

export const UserContent = styled.span`
  margin: auto 1rem;
`;

export const UserRightContent = styled.p`
  margin: auto 0;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  float: right;
  color: #f5b659;
  border: 1px solid #f5b659;
  background-color: white;
  &:hover {
    color: white;
    border: 1px solid #f5b659;
    background-color: #f5b659;
  }
`;
export const UserImg = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 48%;
  background-color: green;
`;

export const RightSpan = styled.span``;

export const LeftNavber = styled.span`
  font-size: 1.2rem;
  display: flex;
`;

export const Videobox = styled.video`
  width: 100%;
  background-color: green;
  height: 80%;
  margin-top 1rem;;
`;

export const BottomNavBar = styled.nav`
  width: 24.375rem;
  height: 8rem;
  position: absolute;
  bottom: 0;
  padding-bottom: 6.5rem;
`;

export const PlayQuestionBox = styled.div`
  width: 80%;
  height: 2.5rem;
  padding-top: 1rem;
  text-align: center;
  background-color: #f5b659;
  font-size: 1.4rem;
  border-radius: 2rem;
  color: white;
  margin: 0 auto;
`;

export const VideoDate = styled.p`
  margin-left: 2rem;
`;

export const VideoInformation = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
