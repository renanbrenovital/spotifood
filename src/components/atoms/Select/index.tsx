import React from 'react';

interface Option {
  name: string;
  value: string;
}

interface Props {
  name: string;
  value: string;
  options: Option[];
}

function Select(props: Props) {
  return (
    <select
      name={props.name}
      value={props.value}
    >
      <option value="optionA">Option A</option>
      <option value="optionB">Option B</option>
      <option value="optionC">Option C</option>
    </select>   
  );
}

export default Select;