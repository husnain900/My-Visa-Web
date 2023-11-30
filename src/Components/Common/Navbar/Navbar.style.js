import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background: #f00;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 143px 0 41px;
  font-family: Inter-Regular;

  @media screen and (max-width: 480px) {
    padding: 24px 20px 20px 72px;
    height: 83px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 26px 40px 26px 80px;
    height: 110px;
  }
`;
export const Title = styled.div`
  h6 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 18px;
    }
  }
  img {
    height: auto;
    width: 165px;
  }
`;

export const Carts = styled.div`
  img {
    height: 29px;
    width: 29px;

    @media screen and (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`;
export const CircleBox = styled.div`
  display: flex;
  gap: 37px;
  @media screen and (max-width: 480px) {
    gap: 20px;
  }
  > div {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      width: 27px;
      height: 27px;
    }

    & img {
      @media screen and (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }
  }

  h6 {
    color: #000;
    font-size: 27.785px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
