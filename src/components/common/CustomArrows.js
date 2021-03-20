import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";


const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {

    return (
        <div className="custom-button-group" >

            <button onClick={() => previous()}> <FontAwesomeIcon icon={faCaretLeft} /> </button>
            <button onClick={() => next()}> <FontAwesomeIcon icon={faCaretRight} /> </button>

        </div>
    );
};


export {
    CustomButtonGroup
};