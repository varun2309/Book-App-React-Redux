export const inputChangeAction=(value)=>({type:'INPUT',value });
  
export const onBtnClickAction=(data)=>({type:"ADD",data});

export const getApiData=(title, author, image, description)=>({type:'Get_Api_Data',title, author, image, description});