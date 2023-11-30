import styled from "styled-components";

export const Footer = styled.footer`
  height: 181px;
  background: #fff;
  font-family: Inter-Regular;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 221px;
  & > li {
    list-style: none;
  }

  @media screen and (max-width: 767px) {
    height: 95px;
    gap: 54px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 160px;
    gap: 80px;
  }
`;

export const ListItem = styled.li`
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 11px;
  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 63px;
    height: 63px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1367px) {
    width: 65px;
    height: 65px;
  }
`;

export const Title = styled.h5`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  :first-child {
    color: #fe0000;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`;
