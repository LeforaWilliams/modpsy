import React from "react";

const BackgroundVideo = props => {
    return (
        <video id="enter-site-video" loop autoPlay muted>
            <source src="media/ruta-teal.mp4" type="video/mp4" />
            <source src="media/ruta-teal.mp4" type="video/ogg" />
        </video>
    );
};

export default BackgroundVideo;
