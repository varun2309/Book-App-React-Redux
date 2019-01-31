import React, { Component } from "react";
import { Display } from "../components/Display";
import { connect, Provider } from "react-redux";
import { reducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { inputChangeAction } from "./action";
import { onBtnClickAction } from "./action";
import createSagaMiddleware from "redux-saga";
import { catchAction } from "./saga";

class Book extends Component {
  inputChangeHandler = event => {
    let { inputChangeHandler } = this.props;
    let value = event.target.value;
    inputChangeHandler(value);
  };

  render() {
    let {
      onbtnClickHandler,
      image,
      textInputValue,
      name,
      author,
      description
    } = this.props;
    return (
      <div className="main">
        <h2>Explore Books</h2>
      
          <Display
            inputName="name"
            inputType="text"
            inputValue={textInputValue}
            OnChangeHandler={this.inputChangeHandler}
            OnClickHandler={onbtnClickHandler}
            imgHref={image}
            userName={name}
            userAuthor={author}
            userDes={description}
          />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDipsatchToProps = dispatch => ({
  onbtnClickHandler: () => dispatch(onBtnClickAction()),
  inputChangeHandler: value => dispatch(inputChangeAction(value))
});

const Container = connect(
  mapStateToProps,
  mapDipsatchToProps
)(Book);

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(catchAction);

export class AppData extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
