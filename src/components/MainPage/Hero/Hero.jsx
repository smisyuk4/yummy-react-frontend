import { Searchbar } from '../Searchbar';
import { InformMenu } from './InformMenu';
import {
	WrapperStyled,
	TopImgStyled,
	SectionStyled,
	DivStyled,
	InformFieldStyled,
	DishStyled,
	TitleStyled,
	ParagrafStyled,
	BoxStyled,

} from './Hero.styled';

export const Hero = () => {
	return <WrapperStyled>
			<TopImgStyled />
		<BoxStyled>
			<TitleStyled><span style={{ color: '#8BAA36', textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}>So</span>Yummy</TitleStyled>
		<ParagrafStyled>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</ParagrafStyled>
		</BoxStyled>

		<SectionStyled />

		<DivStyled />
		<DishStyled />
		<InformFieldStyled />

		<Searchbar />
		<InformMenu />
	</WrapperStyled>;
};
