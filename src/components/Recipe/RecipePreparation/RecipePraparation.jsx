import * as React from 'react';
import {PreparationSection, ImageWrapper, InstructionItem} from './RecipePreparation.styled'

export const RecipePreparation = ({instructions, thumb}) => {
    return (
        <PreparationSection>
            <h2>Recipe Preparation</h2>
            <ol>
                <InstructionItem>{ instructions}</InstructionItem>
            </ol>
            
                <ImageWrapper src={thumb} alt="" />
               
        </PreparationSection>
    )
};