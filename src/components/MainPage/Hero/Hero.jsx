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
	ArrRight,
	SpanTitle,
} from './Hero.styled';

export const Hero = () => {

const handleSubmit = () =>{
	
}
	return <WrapperStyled>
			<TopImgStyled />
		<BoxStyled>
			<TitleStyled className="animate__animated animate__backInUp animate__delay-1s"><SpanTitle>So</SpanTitle>Yummy</TitleStyled>
		<ParagrafStyled>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</ParagrafStyled>
		</BoxStyled>
		<SectionStyled />
		<DivStyled />
		<ArrRight/>
		<DishStyled />
		<InformFieldStyled />
		<Searchbar onSubmit={handleSubmit}/>
		<InformMenu />
	</WrapperStyled>;
};
