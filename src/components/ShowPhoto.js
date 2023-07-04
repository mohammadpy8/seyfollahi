import React from 'react';
// import Watermark from 'react-watermark-component';

const ShowPhoto = ({ photo }) => {
    
    const { image } = photo;

    return (
        <div>
            <img src={image} />
        </div>
        //     <Watermark
        //     image={image}
        //     text="My Photo"
        //     textSize={24}
        //     x={10}
        //     y={10}
        //     color="#ffffff"
        //     opacity={0.5}
        //   />
    );
};

export default ShowPhoto;