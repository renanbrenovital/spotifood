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

function Filters() {
  // const nowDateTimeISO = new Date().toISOString().slice(0,19);
  const defaultSelect = { id: '', name: '', values: []};  
  const [locale, setLocale] = useState<ISelect>(defaultSelect);
  const [country, setCountry] = useState<ISelect>(defaultSelect);

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
      } catch (error) {
        console.error(error);
      }
    }

    getOptions();
  }, []);

  return (
    <Molecule>
      <Input type="date" name="timestamp" placeholder="" value="" />
      <Select
        selected={{
          value: locale.id,
          name: locale.name
        }}
        options={locale.values}
        onChange={(value: String) => console.log('locale', value)}
      />
      <Select
        selected={{
          value: country.id,
          name: country.name
        }}
        options={country.values}
        onChange={(value: String) => console.log('locale', value)}
      />
      <Input type="text" name="limit" placeholder="Quantidade" value="20" />
      <Input type="text" name="offset" placeholder="Página" value="0" />
    </Molecule>
  );
}

export default Filters;