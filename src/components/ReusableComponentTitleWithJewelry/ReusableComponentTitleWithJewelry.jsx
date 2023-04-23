import {
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
} from './ReusableComponentTitleWithJewelry.styled';

export const ReusableComponentTitleWithJewelry = props => {
	return (
		<div>
			<TitleStyled>{props.title}</TitleStyled>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
		</div>
	);
};
