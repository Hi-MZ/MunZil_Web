import styled from "styled-components";
import heart from "../assets/heart.png";
import activeHeart from "../assets/activeHeart.png";

export const VideoNavBox = styled.nav`
  display: flex;
`;

export const Video = styled.div`
  width: 7.688rem;
  height: 14.375rem;
  background-color: gray;
  border-radius: 0.5rem;
  margin-right: 0.5em;
`;

export const Heart = styled.div`
  position: absolute;
  display: flex;
`;

export const HeartNumver = styled.nav`
  margin: 12.5rem 0 0 5rem;
`;

export const DivBox = styled.div`
  width: 2rem;
  height: ${(props) => props.level}rem;
`;
export const TextP = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
export const HeartImage = styled.div`
  margin-right: 0.3rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  background-image: url(${(props) => {
    if (props.isCh) {
      return activeHeart;
    } else {
      return heart;
    }
  }});
`;
