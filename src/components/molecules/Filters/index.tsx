import React, { useState, useEffect } from 'react';
import { useFilter } from '../../../context/FilterContext';
import { apiMocky } from '../../../services/api';

import { Molecule } from './styles';
import Select from '../../atoms/Select';
import Input from '../../atoms/Input';
interface IOption {
  value: string;
  name: string;
}
interface ISelect {
  id: string;
  name: string;
  values: IOption[];
}
interface IInput {
  id: string;
  name: string;
  validation: Object;
}

function Filters() {  
  const {
    locale, setLocale,
    country, setCountry,
    timestamp, setTimestamp,
    limit, setLimit,
    offset, setOffset
  } = useFilter();
  
  const [data, setData] = useState(() => {
    const filters = localStorage.getItem('@Spotifood:filters');

    if(filters) {
      return JSON.parse(filters);
    }
    
    return [];
  });
  
  useEffect(() => {
    const getOptions = async () => {        
      const response = await apiMocky.get('/5a25fade2e0000213aa90776');
      const { data: { filters } } = response;
      
      if(filters) {
        localStorage.setItem('@Spotifood:filters', JSON.stringify(filters));
        setData(filters);
      }      
    }

    if(data.length === 0)
      getOptions();

  }, [data]); 
  
  const validateLimitValue = (number: string, data: any) => {
    const { validation } = data;

    if(Math.sign(Number(number)) !== 1) return;
    if(number < validation.min || number > validation.max) return;

    return true;
  }

  const validateOffsetValue = (number: string) => {
    if(Math.sign(Number(number)) !== 1) return;

    return true;
  }

  return (
    <Molecule>
      <Select
        name={data[0].name}
        value={locale}
        options={data[0].values}
        onChange={(value: string) => setLocale(value)}
      />
      <Select
        name={data[1].name}
        value={country}
        options={data[1].values}
        onChange={(value: string) => setCountry(value)}
      />
      <Input
        type="date"
        name={data[2].id}
        placeholder={data[2].name}
        value={timestamp}
        onChange={(value: string) => setTimestamp(value)}
      />
      <Input
        type="number"
        name={data[3].id}
        placeholder={data[3].name}
        value={limit}
        onChange={(value: string) => {
          if(validateLimitValue(value, data[3]))
            setLimit(value);
          }
        } 
      />
      <Input
        type="number"
        name={data[4].id}
        placeholder={data[4].name}
        value={offset}
        onChange={(value: string) => {
          if(validateOffsetValue(value))
            setOffset(value);
        }}
      />
    </Molecule>
  );
}

export default Filters;