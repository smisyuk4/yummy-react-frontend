import { Searchbar } from '../Searchbar';
import { WrapperStyled, TopImgStyled, SectionStyled, DivStyled, InformFieldStyled, DishStyled, TitleStyled, ParagrafStyled, BoxStyled } from './Hero.styled';

export const Hero = () => {
	return <WrapperStyled>
		<BoxStyled>
			<TopImgStyled />
			<TitleStyled><span style={{ color: '#8BAA36', textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}>So</span>Yummy</TitleStyled>
		</BoxStyled>
		<div>
			<p>Delicious and healthy way to enjoy a variety of fresh ingredients in one satisfying meal</p>
			<button>See all recipes </button>
		</div>
		<ParagrafStyled>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</ParagrafStyled>
		<SectionStyled />
		<DivStyled />
		<DishStyled />
		<InformFieldStyled />
		<Searchbar />
	</WrapperStyled>;
};
