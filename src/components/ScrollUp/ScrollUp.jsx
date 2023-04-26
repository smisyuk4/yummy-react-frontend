import { DivStyled, BtnScroll } from './ScrollUp.styled';
import React from "react";


export const ScrollUp = () => {
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
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
      behavior: "smooth",
    });
  };
  return (
    <DivStyled>
      {scrollTop && (
        <BtnScroll onClick={bottomToTop} className="backToTop">
          &#8593;
        </BtnScroll>
      )}
    </DivStyled>
  );
};
