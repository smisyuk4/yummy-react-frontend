import styled from "@emotion/styled";
import { DivStyled, IconSonetLink, SonetLinksList } from "components/FollowUs/FollowUs.styled";


export const SocialLinksContainer = styled(DivStyled)`
        display: none;
    @media ${props => props.theme.media.tablet} {
        display: none;
    }
	@media ${props => props.theme.media.desktop} {
		display: flex;
        align-items: flex-start;
        width: 165px;
        height: 100px;
        flex-direction: column;
	}
`;
export const SocialLinksTitle = styled.h2`
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;

`

export const SocialLinksList = styled(SonetLinksList)`
    padding: 0;
    justify-content: flex-start;
    
`

export const SocialLinksIcons = styled(IconSonetLink)`
    height: 26px;
    width: 26px;
`