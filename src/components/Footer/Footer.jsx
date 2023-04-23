import {WrapperFooter, FooterStyled, WrapperTitle, IconFooter, IconDiv, Title, FooterNav, FooterNavlink, FooterTeam } from './Footer.styled';
import { SubscriptionForm } from './SubscriptionForm';
import { SonetLinks } from './SonetLinks';


export const Footer = () => {
  return <WrapperFooter>
  <FooterStyled>
    <WrapperTitle>
      <IconDiv>
        <IconFooter id="icon-knife-btn" color="#8BAA36" />
      </IconDiv>
      <Title>So Yummy</Title>
    </WrapperTitle>
    
    <FooterNav>
      <FooterNavlink to="/ingredients">Ingredients</FooterNavlink>
      <FooterNavlink to="/add">Add recipes</FooterNavlink>
      <FooterNavlink to="/my">My recipes</FooterNavlink>
      <FooterNavlink to="/favorite ">Favorites</FooterNavlink>
      <FooterNavlink to="/shopping-list">Shopping list</FooterNavlink>
    </FooterNav>

    <SubscriptionForm />
    <SonetLinks />
  </FooterStyled>
  <FooterTeam>
    <p>	&copy; 2023 All Rights Reserved.</p>
    <p>Terms of Service</p>
  </FooterTeam>
  </WrapperFooter>
};