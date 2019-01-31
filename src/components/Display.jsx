import React from 'react';
import Image from "./image";
import Btn from "./button";
import Textbox from './textbox';
import Name from './name';
import Author from './author';
import Description from './description';
export const Display=({inputName,inputType,inputValue,OnChangeHandler,OnClickHandler,imgHref,userName,userAuthor,userDes})=>(
   <div> <Textbox inputName={inputName} inputType={inputType} inputValue={inputValue} placeHolder="Enter Book Name" OnChangeHandler={OnChangeHandler}/>
    <Btn label="Search" OnClickHandler={OnClickHandler}/>
   <div className="title"><Name userName={userName}/></div>
    <div className="author"><Author userAuthor={userAuthor}/></div>
    <div className="description"><Description userDes={userDes}/></div>
    <div className="image"><Image imgHref={imgHref} imAlt="Search_Book"/></div>
    </div>
);
