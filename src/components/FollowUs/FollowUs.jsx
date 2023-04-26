import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Title } from 'components/Title';
import { DivStyled, SonetLinksList, IconSonetLink } from './FollowUs.styled';

export const FollowUs = ({ title }) => {
	return (
		<DivStyled>
			{title && <Title title={title}/>}

			<SonetLinksList>
				<li>
					<Link
						to="https://www.facebook.com/"
						rel="noopener noreferer"
						target="_blank">
						<IconSonetLink
							id="icon-facebook"
							fill="#8BAA36"
							width={50}
							height={50}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="https://www.youtube.com/"
						rel="noopener noreferer"
						target="_blank">
						<IconSonetLink
							id="icon-youtube"
							fill="none"
							width={50}
							height={50}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="https://twitter.com/"
						rel="noopener noreferer"
						target="_blank">
						<IconSonetLink
							id="icon-twitter"
							fill="#8BAA36"
							width={50}
							height={50}
						/>
					</Link>
				</li>
				<li>
					<Link
						to="https://www.instagram.com/"
						rel="noopener noreferer"
						target="_blank">
						<IconSonetLink
							id="icon-instagram"
							fill="#8BAA36"
							width={50}
							height={50}
						/>
					</Link>
				</li>
			</SonetLinksList>
		</DivStyled>
	);
};

FollowUs.propTypes = {
	title: PropTypes.string,
  }