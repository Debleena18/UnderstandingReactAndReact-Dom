import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
//Even if we have React.memo here, this compomonent will be re-evaluated becoz it's state is being changed
//In App.js we pass Button a function which is getting created every time we re-evaluate the App.js
//Due ro re-creation of func everytime the state of Button is changed everytime and so it gets re-evaluated.
