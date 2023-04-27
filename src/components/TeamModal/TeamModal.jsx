import {
	DivStyled,
	H1Styled,
	UlStyled,
	LiStyled,
	H2Styled,
	H3Styled,
} from './TeamModal.styled';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import avatar1 from '../../images/team/photo_2023-04-26_18-11-24.jpg';
import avatar2 from '../../images/team/photo_2023-04-26_18-11-19.jpg';
import avatar3 from '../../images/team/photo_2023-04-26_18-10-22.jpg';
import avatar4 from '../../images/team/photo_2023-04-26_18-12-19.jpg';
import avatar5 from '../../images/team/DSC_0475.jpg';
import avatar6 from '../../images/team/photo_2023-04-26_18-11-47.jpg';
import avatar7 from '../../images/team/photo_2023-04-26_18-11-40.jpg';
import avatar8 from '../../images/team/photo_2023-04-26_18-11-44.jpg';
import avatar9 from '../../images/team/photo_2023-04-26_18-11-51.jpg';
import avatar11 from '../../images/team/photo_2023-04-26_18-11-58.jpg';
import avatar12 from '../../images/team/photo_2023-04-26_18-12-01.jpg';
import avatar13 from '../../images/team/photo_2023-04-26_18-12-04.jpg';
import avatar14 from '../../images/team/photo_2023-04-26_18-12-07.jpg';
import avatar15 from '../../images/team/photo_2023-04-26_18-12-14.jpg';
import avatar16 from '../../images/team/105589792.jpg';
import avatar17 from '../../images/team/photo_2023-04-27_09-14-30.jpg';

const teamateData = [
	{
		name: 'Iryna Rybka',
		position: 'Fullstack Developer, Scrum Master',
		role: 'Shopping-list and own recipes',
		avatar: avatar2,
	},
	{
		name: 'Sergiy Misyk',
		position: 'Fullstack Developer, Dev Team Lead',
		role: 'Search and ingredients',
		avatar: avatar1,
	},

	{
		name: 'Olexii Andriushchenko',
		position: 'Fullstack Developer',
		role: 'Recipes and MainPage',
		avatar: avatar3,
	},
	{
		name: 'Andriy Asmolovskyi',
		position: 'Fullstack Developer',
		role: 'Recipes and MainPage',
		avatar: avatar5,
	},
	{
		name: 'Vitalii Volyanik',
		position: 'Fullstack Developer',
		role: 'Authorization and Registration',
		avatar: avatar16,
	},
	{
		name: 'Oksana Polyakova',
		position: 'Fullstack Developer',
		role: 'Subscribe, Header and Footer',
		avatar: avatar6,
	},
	{
		name: 'Volodymyr Pobedynskyi',
		position: 'Fullstack Developer',
		role: 'Popular recipe and FavoritePage',
		avatar: avatar7,
	},
	{
		name: 'Oleksii Litvinenko',
		position: 'Fullstack Developer',
		role: 'Favorite and AddRecipePage',
		avatar: avatar17,
	},
	{
		name: 'Margarita Okhten',
		position: 'Fullstack Developer',
		role: 'Ingredients list and RecipePage',
		avatar: avatar8,
	},
	{
		name: 'Yuriy Zagrai',
		position: 'Fullstack Developer',
		role: 'Bug tracking and testing',
		avatar: avatar9,
	},
	{
		name: 'Viktoriia Levchenko',
		position: 'QA Engineer, QA Team Lead',
		role: 'The management of the QA Team',
		avatar: avatar4,
	},

	{
		name: 'Oksana Mylymuk',
		position: 'QA Engineer',
		role: 'Bug tracking and testing',
		avatar: avatar11,
	},
	{
		name: 'Iryna Mykhailyshyn',
		position: 'QA Engineer',
		role: 'Bug tracking and testing',
		avatar: avatar12,
	},
	{
		name: 'Olena Makarenko',
		position: 'QA Engineer',
		role: 'Bug tracking and testing',
		avatar: avatar13,
	},
	{
		name: 'Roman Budziak',
		position: 'QA Engineer',
		role: 'Bug tracking and testing',
		avatar: avatar14,
	},
	{
		name: 'Yuliia Kapshiienko',
		position: 'QA Engineer',
		role: 'Bug tracking and testing',
		avatar: avatar15,
	},
];

const teamCards = teamateData.map(({ name, position, avatar }) => (
	<LiStyled key={name}>
		<img src={avatar} alt="avatar" />
		<H2Styled>{name}</H2Styled>
		<H3Styled>{position}</H3Styled>
	</LiStyled>
));

export const TeamModal = () => {
	const [showModal, setShowModal] = useState(true);
	return !showModal ? null : (
		<Modal close={setShowModal}>
			<DivStyled>
				<H1Styled>Our Team</H1Styled>
				<UlStyled>{teamCards}</UlStyled>
			</DivStyled>
		</Modal>
	);
};
