import styled from '@emotion/styled';

export const IngredientsListSection = styled.section`
padding-top: 32px;
`
/* padding: 32px 16px 0px 16px;` */
// padding-top: 32px;`

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;`

  export const ListBar = styled.div`
  background: #8baa36;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 21px 32px;
    gap: 38px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding: 21px 40px;
    gap: 110px;
  }
`;

export const ItemBar = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: #fafafa;
  &:first-child {
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IngedientsItem = styled.li`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 8px;
  background: #EBF3D4;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
`;

export const ImageStyled = styled.image`
display: block;
  object-fit: contain;` 