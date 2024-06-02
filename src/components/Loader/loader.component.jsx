import React from 'react';
import {Spinner, SpinnerContainer} from  './loader.styles.jsx';

const Loader = ()=>{

    return(
        <SpinnerContainer>
            <Spinner/>
        </SpinnerContainer>
    )
}
export default Loader;