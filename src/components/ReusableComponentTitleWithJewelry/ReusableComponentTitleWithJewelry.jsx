import {
	TitleDiv,
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
} from './ReusableComponentTitleWithJewelry.styled';

export const ReusableComponentTitleWithJewelry = props => {
	return (
		<div>
			<TitleDiv>
				<TitleStyled>{props.title}</TitleStyled>
			</TitleDiv>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
		</div>
	);
};
