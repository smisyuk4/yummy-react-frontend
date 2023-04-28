import styled from "@emotion/styled";

export const PreparationSection = styled.section`
  padding: 50px 0px 100px 0px;
  @media (min-width: 768px) {
    padding: 96px 0px 200px 0px;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 100px 0px 200px 0px;
  }
`;

export const TextDiv = styled.div`
margin-bottom: 40px;
  @media ${props => props.theme.media.tablet} {
    margin-bottom: 53px;
  }
  @media ${props => props.theme.media.desktop} {
    min-width: 757px;
    margin-bottom: 0;
  }`

export const TitleStyles = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.recipeColor};
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
  @media ${props => props.theme.media.tablet} {
    letter-spacing: -0.24px;
  }
 @media ${props => props.theme.media.desktop} {
  }
`;

export const InstructionItem = styled.li`
  display: flex;
   white-space: pre-wrap;
  align-items: center;
    margin-bottom: 18px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.recipeColor};
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const ImageWrapper = styled.div`
width: 100%;
  height: auto;
  border-radius: 8px;
    @media screen and (min-width: 768px) {
      width: 433px;
      height: 332px;
    }
    @media screen and (min-width: 1440px)  {
    margin-left: 50px;
    min-width: 433px;
  }
;`

export const ImgStyled = styled.img`
object-fit: cover;
  width: 100%;
  overflow: hidden;
  height: 100%;
  display: block;
  border-radius: 8px;
   @media screen and (min-width: 768px) {
      min-width: 433px;
      height: 332px; 
    }` 