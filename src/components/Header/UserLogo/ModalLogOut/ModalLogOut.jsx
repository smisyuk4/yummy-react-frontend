import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import {
	DivStyledLogOut,
	Modal,
	WrapperBtns,
	TextLogOut,
	BtnLogOut,
	BtnCancel,
} from './ModalLogOut.styled';
import { IconCross } from '../ModalUserProfil/ModalUserProfil.styled';
import { logOut } from 'redux/auth/operations';

const modalRoot = document.getElementById('modal-root');

export const ModalLogOut = ({ isOpen, close }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		document.addEventListener('keydown', closeModal);
		return () => document.removeEventListener('keydown', closeModal);
	});

	const closeModal = ({ target, currentTarget, code }) => {
		if (target === currentTarget || code === 'Escape') {
			close();
		}
	};

	if (!isOpen) return null;

	return createPortal(
		<DivStyledLogOut onClick={closeModal}>
			<Modal onClick={closeModal}>
				<IconCross id="icon-close" onClick={closeModal} />
				<TextLogOut>Are you sure you want to log out?</TextLogOut>
				<WrapperBtns>
					<BtnLogOut
						type="submit"
						onClick={() => {
							dispatch(logOut());
							setIsLoading(true);
						}}>
						{isLoading ? (
							<ColorRing
								visible={true}
								ariaLabel="blocks-loading"
								height="25px"
								width="25px"
								colors={[
									'#2a2c36',
									'#92f6f4',
									'#FcBC00',
									'#7c94dd',
									'#31e04c',
								]}
							/>
						) : (
							'Log out'
						)}
					</BtnLogOut>
					<BtnCancel type="submit" onClick={closeModal}>
						Cancel
					</BtnCancel>
				</WrapperBtns>
			</Modal>
		</DivStyledLogOut>,
		modalRoot
	);
};
