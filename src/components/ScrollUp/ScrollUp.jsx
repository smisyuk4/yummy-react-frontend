import { DivStyled, BtnScroll } from './ScrollUp.styled';
import React from 'react';
import imgArrow from './arrow_double_up_1_15737.png';

export const ScrollUp = () => {
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <DivStyled>
      {scrollTop && (
        <BtnScroll onClick={bottomToTop} className="backToTop">
          <img src={imgArrow} alt="arrow" width="40" height="40" />
        </BtnScroll>
      )}
    </DivStyled>
  );
};
