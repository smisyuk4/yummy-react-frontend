import {
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
} from 'components/ReusableComponentTitleWithJewelry/ReusableComponentTitleWithJewelry.styled';
import { Title } from './Title.styled';

export const TitleStyled = props => {
	return (
		<>
			<Title>{props.title}</Title>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
		</>
	);
};
