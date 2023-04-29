import 'animate.css';
import {
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
} from './ReusableComponentTitleWithJewelry.styled';

export const ReusableComponentTitleWithJewelry = props => {
	return (
		<div>
			<TitleStyled className="animate__animated animate__pulse animate__delay-1s">{props.title}</TitleStyled>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
		</div>
	);
};
