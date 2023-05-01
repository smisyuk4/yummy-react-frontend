import * as React from 'react';

import { v4 as uuidv4 } from 'uuid';
import {PreparationSection, ImageWrapper, InstructionItem, TextDiv, ImgStyled, TitleStyles} from './RecipePreparation.styled'
import photo from 'images/recipeImg/ingredImage.jpg'

export const RecipePreparation = ({ instructions, thumb }) => {
    let items = [];
    if (instructions) {
    items = instructions
      .split('\r\n')
      .filter(el => {
        if (!el) return false;
        if (!isNaN(el)) return false;
        if (el.toLowerCase().includes('step')) return false;
          return true;
      })
      .map((item, index) => {
        let splitItem = item;
        for (let i = 0; i < 2; i++) {
          if (!isNaN(splitItem[i]) ||splitItem[i] === '.') {
            splitItem = splitItem.slice(i + 1);
          }
        }
        return (
          <InstructionItem key={uuidv4()}>
            <div>{index + 1}</div>
            <p>{splitItem}</p>
          </InstructionItem>
        );
      });
  }
 
    return (
        <PreparationSection>
            <TextDiv>
            <TitleStyles>Recipe Preparation</TitleStyles>
            <ol>
                { items}
                </ol>
                </TextDiv>
            <ImageWrapper>
                <ImgStyled src={thumb ?? photo} alt="" />
               </ImageWrapper>
        </PreparationSection>
    )
};

