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
  FooterTeamText,
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
              <FooterNavlink to="/search?type=Ingredients">
                Ingredients
              </FooterNavlink>
              <FooterNavlink to="/add">Add recipes</FooterNavlink>
              <FooterNavlink to="/my">My recipes</FooterNavlink>
              <FooterNavlink to="/favorite ">Favorites</FooterNavlink>
              <FooterNavlink to="/shopping-list">Shopping list</FooterNavlink>
            </FooterNav>
          </FotterUpDiv>
          <SubscriptionForm />
        </WrapDiscrSubscrForm>

        <FollowUs />
      </FooterStyled>
      <FooterTeam>
        <FooterTeamText> &copy; 2023 All Rights Reserved.</FooterTeamText>
        <FooterTeamText>Terms of Service</FooterTeamText>
        <FooterTeamLink onClick={() => setShowModal(true)}>
			<FooterTeamText>
				Created by Team
			</FooterTeamText>
        </FooterTeamLink>
      </FooterTeam>
      {showModal && <TeamModal onClose={setShowModal} />}
    </WrapperFooter>
  );
};
