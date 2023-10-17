import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 352px;
  bottom: 0px;
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
`;

export const FooterColumn = styled.div`
  position: relative;
  width: 100%;
  padding-top: 2rem;
  justify-content: center;
`;
export const ColumnIcons = styled.div`
  color: white;
  display: flex;
  gap: 10rem;
  margin-top: 5rem;
  font-size: 30px;
  justify-content: center;

  @media screen and (max-width: 890px) {
    font-size: 20px;
  }

  @media screen and (max-width: 769px) {
    gap: 10%;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  :hover {
    transform: scale(1.1);
  }
`;

export const ColumnHeading = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: goldenrod;
  text-align: center;

  @media screen and (max-width: 890px) {
    font-size: 12px;
  }

  @media screen and (max-width: 769px) {
  }
`;
export const FooterLine = styled.div`
  position: relative;
  width: 90%;
  height: 0px;
  left: 5%;
  top: 69px;
  border: 1px solid #ffffff;
`;
export const CopyrightWraper = styled.div`
  position: relative;
  width: 100%;
  top: 89px;
  display: flex;
`;
export const Copyright = styled.div`
  position: relative;
  width: 100%;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 890px) {
    font-size: 12px;
  }
`;
