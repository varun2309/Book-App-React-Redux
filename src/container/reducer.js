

const initialState={
textInputValue : '',
name:"",   
image:"" ,
author:"",
description:"",
}

export const reducer=(state=initialState,{type, value, title, author, image, description})=>{
    switch(type){
  case "INPUT":
  console.log(value)
    return Object.assign({},state,{textInputValue:value})

  case "Get_Api_Data":
    return Object.assign({},state,{name:title, author:author, image:image, description:description, textInputValue : ''})
  default:
    return state;
}
};
