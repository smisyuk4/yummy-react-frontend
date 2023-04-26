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

const teamateData = [
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
	{
		name: 'Andres Felipe',
		position: 'Frontend Developer',
		avatar: 'https://avatars.githubusercontent.com/u/71278909?v=4',
	},
];

const teamCards = teamateData.map(({ name, position, avatar }) => (
	<LiStyled>
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
