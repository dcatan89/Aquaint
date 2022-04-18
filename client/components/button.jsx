import React from 'react';

export default function Button(props) {
  const btnClass = props.classes;
  const btnText = props.text;

  return (
      <button type={props.type} onClick={props.click} className={btnClass}>{btnText}</button>
  );
}
