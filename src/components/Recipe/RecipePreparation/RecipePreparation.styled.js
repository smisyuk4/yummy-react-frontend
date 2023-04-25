import styled from "@emotion/styled";

export const PreparationSection = styled.section`
  padding-bottom: 100px;
  /* display: flex; */
  @media (min-width: 768px) {
    padding-bottom: 200px;
  }
  @media (min-width: 1440px) {
   display: block;
    justify-content: space-between;
  }
`;

export const InstructionItem = styled.li`
  display: flex;
  align-items: center;
    margin-bottom: 18px;
    font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const ImageWrapper = styled.img`
    border-radius: 8px;
    padding-left: 32px;
    width: 100%;
    height: 250px;
    @media screen and (min-width: 768px) {
      width: 433px;
      height: 332px;
    }
    @media screen and (min-width: 1440px)  {
    width: 433px;
    height: 332px;
    flex-shrink: 0;

  }
;`