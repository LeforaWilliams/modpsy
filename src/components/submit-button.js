import React from "react";

const SubmitButton = props => {
    const { text, submit } = props;
    return (
        <div className="submit-button-wrap">
            <button onClick={submit}>{text}</button>
        </div>
    );
};
export default SubmitButton;
