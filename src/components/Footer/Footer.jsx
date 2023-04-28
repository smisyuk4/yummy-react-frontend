import {
	WrapperFooter,
	WrapDiscrSubscrForm,
	FooterStyled,
	FotterUpDiv,
	WrapperDiscr,
	WrapperTitle,
	IconFooter,
	Title,
	FooterNav,
	FooterNavlink,
	FooterTeam,
	FooterTeamLink,
} from './Footer.styled';
import { SubscriptionForm } from './SubscriptionForm';
import { FooterDescription } from './FooterDescription';
import { FollowUs } from 'components/FollowUs';
import { Link } from 'react-router-dom';
import { TeamModal } from 'components/TeamModal';
import { useState } from 'react';

export const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<WrapperFooter>
			<FooterStyled>
				<WrapDiscrSubscrForm>
					<FotterUpDiv>
						<WrapperDiscr>
							<WrapperTitle>
								<Link to="/">
									<IconFooter id="icon-knife-btn" />
								</Link>

								<Title>So Yummy</Title>
							</WrapperTitle>
							<FooterDescription />
						</WrapperDiscr>

						<FooterNav>
							<FooterNavlink to="/ingredients">
								Ingredients
							</FooterNavlink>
							<FooterNavlink to="/add">Add recipes</FooterNavlink>
							<FooterNavlink to="/my">My recipes</FooterNavlink>
							<FooterNavlink to="/favorite ">
								Favorites
							</FooterNavlink>
							<FooterNavlink to="/shopping-list">
								Shopping list
							</FooterNavlink>
						</FooterNav>
					</FotterUpDiv>
					<SubscriptionForm />
				</WrapDiscrSubscrForm>

				<FollowUs />
			</FooterStyled>
			<FooterTeam>
				<p> &copy; 2023 All Rights Reserved.</p>
				<p>Terms of Service</p>
				<FooterTeamLink onClick={() => setShowModal(true)}>
					Created by Team
				</FooterTeamLink>
			</FooterTeam>
			{showModal && <TeamModal onClose={setShowModal} />}
		</WrapperFooter>
	);
};
