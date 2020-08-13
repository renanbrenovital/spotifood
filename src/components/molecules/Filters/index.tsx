import React, { useState, useEffect } from 'react';
import { Molecule } from './styles';
import { apiMocky } from '../../../services/api';

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
  const [locale, setLocale] = useState<ISelect>({ id: '', name: '', values: []});
  const [country, setCountry] = useState<ISelect>({ id: '', name: '', values: []});
  const [timestamp, setTimestamp] = useState<IInput>({ id: '', name: '', validation: {}});
  const [limit, setLimit] = useState<IInput>({ id: '', name: '', validation: {}});
  const [offset, setOffset] = useState<IInput>({ id: '', name: '', validation: {}});

  const [localeValue, setLocaleValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [timestampValue, setTimestampValue] = useState('');
  const [limitValue, setLimitValue] = useState('');
  const [offsetValue, setOffsetValue] = useState('');
  
  useEffect(() => {
    async function getOptions() {
      try {        
        if(!localStorage.filters) {
          const { data } = await apiMocky.get('/5a25fade2e0000213aa90776');
          localStorage.filters = JSON.stringify(data.filters);
        }
        const filters = JSON.parse(localStorage.filters);      
        setLocale(filters[0]);
        setCountry(filters[1]);
        setTimestamp(filters[2]);
        setLimit(filters[3]);
        setOffset(filters[4]);
      } catch (error) {
        console.error(error);
      }
    }

    getOptions();
  }, []);

  useEffect(() => {
    // const log = () => timestampValue && console.log(new Date(timestampValue).toISOString().slice(0,19));
    // log();
    console.log('alterou filtro');
  }, [timestampValue, localeValue, countryValue]);

  return (
    <Molecule>
      <Select
        selected={{
          value: locale.id,
          name: locale.name
        }}
        options={locale.values}
        onChange={(value: string) => setLocaleValue(value)}
      />
      <Select
        selected={{
          value: country.id,
          name: country.name
        }}
        options={country.values}
        onChange={(value: string) => setCountryValue(value)}
      />
      <Input
        type="date"
        name={timestamp.id}
        placeholder={timestamp.name}
        value={timestampValue}
        onChange={(value: string) => setTimestampValue(value)} 
      />
      <Input
        type="number"
        name={limit.id}
        placeholder={limit.name}
        value={limitValue}
        onChange={(value: string) => setLimitValue(value)} 
      />
      <Input
        type="number"
        name={offset.id}
        placeholder={offset.name}
        value={offsetValue}
        onChange={(value: string) => setOffsetValue(value)}
      />
    </Molecule>
  );
}

export default Filters;