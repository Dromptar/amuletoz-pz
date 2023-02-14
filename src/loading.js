import React from "react";
import ReactLoading from 'react-loading';

const Loading  = () => (
    <div className="loading">
        <ReactLoading 
            type="spinningBubbles"
            color="white"
        />
    </div>
)

export default Loading;