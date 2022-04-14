import React from 'react';

export default function Button(props) {
  const btnClass = props.classes;
  const btnText = props.text;

  return (
    <div>
      <button type={props.type} onSubmit={props.submit} onClick={props.click} className={btnClass}>{btnText}</button>
    </div>
  );
}
