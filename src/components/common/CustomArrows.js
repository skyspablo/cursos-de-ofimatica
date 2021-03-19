import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";

const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    return (
        <div className="custom-button-group" >

            <button onClick={() => previous()}> <FontAwesomeIcon icon={faCaretLeft} /> </button>
            <button onClick={() => next()}> <FontAwesomeIcon icon={faCaretRight} /> </button>

        </div>
    );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <h4>These buttons can be positioned anywhere you want on the screen</h4>
            <button onClick={previous}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export {
    CustomLeftArrow,
    CustomRightArrow,
    CustomButtonGroup,
    CustomButtonGroupAsArrows,
};