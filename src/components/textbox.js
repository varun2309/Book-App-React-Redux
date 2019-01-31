import React from 'react';

const Textbox=({inputName,inputType,inputValue,placeHolder,OnChangeHandler})=>(
    <input type={inputType} name={inputName} value={inputValue} placeholder={placeHolder} onChange={OnChangeHandler}/>
    );

    export default Textbox;