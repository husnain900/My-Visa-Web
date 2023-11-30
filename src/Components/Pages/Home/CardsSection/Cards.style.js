import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 16px;
  justify-content: center;
  margin: 47px 0;
  @media screen and (max-width: 767px) {
    padding: 73px 0;
  }
`;

export const CardBox = styled.div`
  border-radius: 6px;
  border: 1px solid #d2d2d2;
  background: #fff;
  width: 329px;
  @media screen and (max-width: 767px) {
    width: 262px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1367px) {
    width: 300px;
  }
`;
export const CardBox2 = styled.div`
  border-radius: 6px;
  border: 1px solid #d2d2d2;
  background: #fff;
  width: 135px;
`;

export const CardBoxCircle = styled.div`
  border-radius: 6px;
  background: #f1f1f1;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 181px;
  }
`;

export const CircleContent = styled.div`
  width: 123px;
  height: 123px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media screen and (max-width: 767px) {
    width: 98px;
    height: 98px;
    & > img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const CardButton = styled.div`
  text-align: center;
  height: 200px;
  padding: 10px 42px 16px;
  @media screen and (max-width: 767px) {
    height: 159px;
    padding: 32px 34px 21px;
    & > button {
      width: 194px;
      height: 51px;
      font-size: 24px;
    }
  }
`;

export const CardTitle = styled.h4`
  color: #000;
  font-family: Inter-Regular;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 27px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
`;

export const ActionButton = styled.button`
  width: 243px;
  height: 64px;
  border-radius: 13px;
  margin-bottom: 30px;
  background: #fe0000;
  color: #fff;
  font-family: Inter-Regular;
  font-size: 30px;
  font-style: normal;
  border: none;
  font-weight: 500;
  cursor: pointer;
  line-height: normal;
  & > a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    width: 194px;
    height: 51px;
    font-size: 24px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;
export const VisaCards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;
