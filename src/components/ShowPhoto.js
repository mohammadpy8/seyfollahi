import React from 'react';
import Watermark from 'react-watermark';

const ShowPhoto = ({ photo }) => {
    
    const { image } = photo;

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Watermark text="My Watermark" fontSize={24} opacity={0.5}>
                <img src={image} alt="My Image" />
            </Watermark>
        </div>

    );
};

export default ShowPhoto;