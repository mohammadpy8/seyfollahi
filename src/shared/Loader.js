import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
        }}>
            <TailSpin
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass

            />
        </div>
    );
};

export default Loader;