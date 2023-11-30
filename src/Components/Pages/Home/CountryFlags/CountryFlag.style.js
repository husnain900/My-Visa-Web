import styled from "styled-components";

export const CountryLogoWrapper = styled.div`
  height: 282px;
  background: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 47px;
  // margin: 331px 0 47px;
  gap: 78px;
  @media screen and (max-width: 767px) {
    // margin: 307px 0 43px;
    margin: 30px 0 4px;

    height: 76px;
    gap: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 270px;
    // margin: 370px 0 60px;
    margin: 37px 0 60px;

    gap: 34px;
  }
`;

export const FlagBox = styled.div`
  margin: auto;
  height: 119px;
  width: 119px;
  border-radius: 50%;
  border: 1px solid #e30713;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 1024px) and (max-width: 1367px) {
    height: 105px;
    width: 105px;
  }
  @media screen and (max-width: 767px) {
    height: 32px;
    width: 32px;
    margin-bottom: 7px;
    padding-top: 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 72px;
    width: 72px;
    margin-bottom: 10px;
    padding-top: 5px;
  }

  img {
    @media screen and (max-width: 767px) {
      height: 27px;
      width: auto;
    }
    // & > a > img {
    //   @media screen and (max-width: 767px) {
    //     height: 27px;
    //     width: auto;
    //   }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 67px;
      width: auto;
    }
    @media screen and (min-width: 1024px) and (max-width: 1367px) {
      height: 100px;
      width: auto;
    }
  }
`;

export const CountryName = styled.span`
  color: #000;
  font-family: Inter-Regular;
  font-size: 27.592px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 7px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1367px) {
    font-size: 24px;
  }
`;
