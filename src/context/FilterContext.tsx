import React, { createContext, useContext, useState } from 'react';
interface IContext {
  locale: string;
  setLocale: Function;
  country: string;
  setCountry: Function;
  timestamp: string;
  setTimestamp: Function;
  limit: string;
  setLimit: Function;
  offset: string;
  setOffset: Function;
  query: string;
  setQuery: Function;
}

const FilterContext = createContext<IContext>({} as IContext);

export default function FilterProvider({ children }: any) {
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [query, setQuery] = useState('');
  
  return (
    <FilterContext.Provider value={{
      locale, setLocale,
      country, setCountry,
      timestamp, setTimestamp,
      limit, setLimit,
      offset, setOffset,
      query, setQuery
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useQuery() {
  const context = useContext(FilterContext);
  const { query, setQuery } = context;
    
  return { query, setQuery };
}

export function useFilter() {
  const context = useContext(FilterContext);
  const {
    locale, setLocale,
    country, setCountry,
    timestamp, setTimestamp,
    limit, setLimit,
    offset, setOffset
  } = context;
  
  return {
    locale, setLocale,
    country, setCountry,
    timestamp, setTimestamp,
    limit, setLimit,
    offset, setOffset
  };
}