import {createSelector} from "reselect";

const titleSelector = state =>state.name;
const authorSelector = state =>state.author;
const imageSelector = state =>state.image;
const descriptionSelector = state =>state.description;
const textInputvalueSelector = state =>state.textInputValue;

export const getTitleselector=createSelector(titleSelector,nam=>nam);

export const getAuthorselector=createSelector(authorSelector,author=>author)

export const getImageselector=createSelector(imageSelector,image=>image)

export const getDesselector=createSelector(descriptionSelector,des=>des)

export const getTextselector=createSelector(textInputvalueSelector,text=>text)
