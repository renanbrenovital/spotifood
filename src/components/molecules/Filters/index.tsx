import React, { useEffect } from 'react';
import { useFilter } from '../../../context/FilterContext';
import { apiMocky } from '../../../services/api';

import { Molecule } from './styles';
import Select from '../../atoms/Select';
import Input from '../../atoms/Input';

function Filters() {  
  const {
    locale, setLocale,
    country, setCountry,
    timestamp, setTimestamp,
    limit, setLimit,
    offset, setOffset
  } = useFilter();
  
  const limitIsValid = (number: string, validation: any) => {
    if(Math.sign(Number(number)) !== 1) return;
    
    if(number < validation.min || number > validation.max) return;

    return true;
  }

  const offsetIsValid = (number: string, validation: any) => {
    if(Math.sign(Number(number)) !== 1) return;

    return true;
  }
  
  
  useEffect(() => {
    const apiFilters = async () => {      
      if(!localStorage.getItem('@Spotifood:filters')) {
        const { data } = await apiMocky.get("/5a25fade2e0000213aa90776");    
        const { filters } = data;
        localStorage.setItem('@Spotifood:filters', JSON.stringify(filters));
      }   
      
      const localFilters = localStorage.getItem('@Spotifood:filters') || '';

      if(localFilters) {
        const filters = JSON.parse(localFilters);
        setLocale(filters[0]);
        setCountry(filters[1]);
        setTimestamp(filters[2]);
        setLimit(filters[3]);
        setOffset(filters[4]);  
      }   
    }

    apiFilters();
  }, [setCountry, setLimit, setLocale, setOffset, setTimestamp]);

  return (
    <Molecule>
      <Select
        name={country.id}
        value={country.value}
        options={country.values}
        onChange={(value: string) => setCountry({...country, value})}
      />
      <Select
        name={locale.id}
        value={locale.value}
        options={locale.values}
        onChange={(value: string) => setLocale({...locale, value})}
      />
      <Input
        type="date"
        name={timestamp.id}
        placeholder={timestamp.name}
        value={timestamp.value}
        onChange={(value: string) => setTimestamp({...timestamp, value})}
      />
      <Input
        type="number"
        name={limit.id}
        placeholder={limit.name}
        value={limit.value}
        onChange={(value: string) => {
          if(limitIsValid(value, limit.validation)) {
            setLimit({...limit, value});
          }
        }} 
      />
      <Input
        type="number"
        name={offset.id}
        placeholder={offset.name}
        value={offset.value}
        onChange={(value: string) => {
          if(offsetIsValid(value, offset.validation))
            setOffset({...offset, value});
        }}
      />
    </Molecule>
  );
}

export default Filters;