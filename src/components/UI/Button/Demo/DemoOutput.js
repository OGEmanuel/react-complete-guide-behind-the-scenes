import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.items}</MyParagraph>;
};

export default React.memo(DemoOutput);
