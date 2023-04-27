import * as React from 'react';
import {PreparationSection, ImageWrapper, InstructionItem, TextDiv, ImgStyled, TitleStyles} from './RecipePreparation.styled'
import photo from 'images/recipeImg/ingredImage.jpg'

export const RecipePreparation = ({instructions, thumb}) => {
    return (
        <PreparationSection>
            <TextDiv>
            <TitleStyles>Recipe Preparation</TitleStyles>
            <ol>
                <InstructionItem>{ instructions}</InstructionItem>
                </ol>
                </TextDiv>
            <ImageWrapper>
                <ImgStyled src={thumb ?? photo} alt="" />
               </ImageWrapper>
        </PreparationSection>
    )
};