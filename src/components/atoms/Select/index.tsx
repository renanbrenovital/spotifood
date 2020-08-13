import React from 'react';
interface Option {
  value: string;
  name: string;
}
interface Props {
  selected: Option;
  options: Option[];
  onChange: Function;
}

function Select(props: Props) {
  const { selected, options, onChange } = props;
  return (
    <select onChange={event => onChange(event.target.value)}>
      <option value={selected.value}>{selected.name}</option>
      {
        options.map(item => (
          <option value={item.value} key={item.value}>{item.name}</option>))
      }
    </select>
  );
}

export default Select;