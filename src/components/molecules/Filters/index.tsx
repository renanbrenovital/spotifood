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
  
  const [selectLocale, setSelectLocale] = useState<ISelect>({id: '', name: '', values: []});
  const [selectCountry, setSelectCountry] = useState<ISelect>({id: '', name: '', values: []});
  const [inputTimestamp, setInputTimestamp] = useState<IInput>({id: '', name: '', validation: {}});
  const [inputLimit, setInputLimit] = useState<IInput>({id: '', name: '', validation: {}});
  const [inputOffset, setInputOffset] = useState<IInput>({id: '', name: '', validation: {}});
  
  useEffect(() => {

    async function getOptions() {
      try {        
        if(!localStorage.filters) {
          const { data } = await apiMocky.get('/5a25fade2e0000213aa90776');
          localStorage.filters = JSON.stringify(data.filters);
        }
        const filters = JSON.parse(localStorage.filters);
        setSelectLocale(filters[0]);
        setSelectCountry(filters[1]);
        setInputTimestamp(filters[2]);
        setInputLimit(filters[3]);
        setInputOffset(filters[4]);
      } catch (error) {
        console.error(error);
      }
    }

    getOptions();
  }, []);

  return (
    <Molecule>
      <Select
        name={selectCountry.name}
        value={country}
        options={selectCountry.values}
        onChange={(value: string) => setCountry(value)}
      />
      <Select
        name={selectLocale.name}
        value={locale}
        options={selectLocale.values}
        onChange={(value: string) => setLocale(value)}
      />
      <Input
        type="date"
        name={inputTimestamp.id}
        placeholder={inputTimestamp.name}
        value={timestamp}
        onChange={(value: string) => setTimestamp(value)}
      />
      <Input
        type="number"
        name={inputLimit.id}
        placeholder={inputLimit.name}
        value={limit}
        onChange={(value: string) => setLimit(value)} 
      />
      <Input
        type="number"
        name={inputOffset.id}
        placeholder={inputOffset.name}
        value={offset}
        onChange={(value: string) => setOffset(value)}
      />
    </Molecule>
  );
}

export default Filters;