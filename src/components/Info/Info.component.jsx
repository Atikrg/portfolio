import React, { useState } from 'react';
import "./Info.component.css";

const InfoWork = (props) => {
    return (
        <div className='container-fluid brand-container'>
            <div className='content-info'>
                <div className='brand_name'>
                    <h1 className='brand brand-text text-center text-white'>Atik Salim Rangnekar</h1>
                </div>
                <div className='speciality sub_info text-white'>
                    <h1>Full Stack Developer and Machine Learner</h1>
                    <h3 className='mywork'>FreeLancer</h3>
                </div>
            </div>


        </div>
    );
};

export default InfoWork;