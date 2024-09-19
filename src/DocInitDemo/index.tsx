import React from 'react';
import { default as docSniffSdkUtil } from '../utils/docSniffInit'
// import docSniffInitHandler from "../utils/docSniffInit"

const DocInitDemo = () => {

    const clickHandler = () => {
        console.log('clickHandler !!! docSniffInitHandler');
        docSniffSdkUtil.docSniffInitHandler()
    }

    return (<div>
        <button onClick={clickHandler} type="button" >docInitHandle</button>
    </div>)
}

export default DocInitDemo
