import noResImg from '../../images/recipeImg/no-result.png';

import { Container, ImgWrapper, NoResImg, Text } from './NoResults.styled';

export const NoResults = props => {
	return (
		<Container>
			<ImgWrapper>
				<NoResImg src={noResImg} alt="No result" />
			</ImgWrapper>
			<Text>{props.text}</Text>
		</Container>
	);
};
