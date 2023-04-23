import {WrapperFooter, WrapDiscrSubscrForm, FooterStyled, FotterUpDiv, WrapperDiscr, WrapperTitle, IconFooter, IconDiv, Title, FooterNav, FooterNavlink, FooterTeam } from './Footer.styled';
import { SubscriptionForm } from './SubscriptionForm';
import { FooterDescription } from './FooterDescription';
import { FollowUs } from 'components/FollowUs';
import { HeaderLogo } from 'components/Header/HeaderLogo';

export const Footer = () => {
  return <WrapperFooter>
  <FooterStyled>
    <WrapDiscrSubscrForm>
      <FotterUpDiv>
        <WrapperDiscr>
          <WrapperTitle>
            <HeaderLogo />
            <Title>So Yummy</Title>
          </WrapperTitle>
          <FooterDescription />
        </WrapperDiscr>
      
        <FooterNav>
          <FooterNavlink to="/ingredients">Ingredients</FooterNavlink>
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
    <p>	&copy; 2023 All Rights Reserved.</p>
    <p>Terms of Service</p>
  </FooterTeam>
  </WrapperFooter>
};