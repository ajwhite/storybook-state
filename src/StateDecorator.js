import React from "react";
import State from "./State";

const StateDecorator = (store, parseState = state => state) => storyFn => (
  <State store={store} parseState={parseState}>
    {storyFn(store)}
  </State>
);
export default StateDecorator;
