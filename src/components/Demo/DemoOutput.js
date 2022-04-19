import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
//This will prevent DemoOutput and its child comp to re-execute.
//Like in Button "false" is also created everytime but unlike in Buttom "false" is a boolean value
//so like strings and num, bool val are primitive val in JS so memo works.
//But not works in array, obj or here func, So to make it work we have to use a hook named useCallback