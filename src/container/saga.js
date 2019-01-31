import {takeLatest,put,call,select} from "redux-saga/effects";
import {getApiData} from "./action";
import {fetchData} from "../util/api";

function* getData(){
const searchItem=yield select(state=>state.textInputValue);
const data= yield   call(fetchData,searchItem);
console.log(data);


 const title=data.title;
 const author=data.authors[0];
 const image=data.imageLinks.thumbnail;
 const description=data.description;

    yield put(getApiData(title, author, image, description));
  
};

export function* catchAction(){
yield takeLatest("ADD",getData)
};

