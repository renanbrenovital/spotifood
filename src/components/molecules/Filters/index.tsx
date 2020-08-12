import React from 'react';
import { Molecule } from './styles';

import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

function Filters() {
  return (
    <Molecule>
      <Input type="date" name="timestamp" placeholder="" />
      <Select name="locale" value="" options={
        [
          {
            "value": "",
            "name": "Locale"
          },
          {
            "value": "en_AU",
            "name": "en_AU"
          },
          {
            "value": "de_DE",
            "name": "de_DE "
          },
          {
            "value": "pt_BR",
            "name": "pt_BR"
          },
          {
            "value": "fr_FR",
            "name": "fr_FR"
          },
          {
            "value": "en_US",
            "name": "en_US"
          },
          {
            "value": "es_AR",
            "name": "es_AR"
          }
        ]}
      />
      <Select name="country" value="" options={
        [
          {
            "value": "",
            "name": "País"
          },
          {
            "value": "AU",
            "name": "Australia"
          },
          {
            "value": "DE",
            "name": "Alemanhã"
          },
          {
            "value": "BR",
            "name": "Brasil"
          },
          {
            "value": "PT",
            "name": "Portugal"
          },
          {
            "value": "en_US",
            "name": "EUA"
          },
          {
            "value": "RU",
            "name": "Rússia"
          }
        ]}
      />
      <Select name="limit" value="" options={
        [
          {
            "value": "",
            "name": "Quantidade"
          },
          {
            "value": "10",
            "name": "10"
          },
          {
            "value": "20",
            "name": "20"
          },
          {
            "value": "30",
            "name": "30"
          },
          {
            "value": "40",
            "name": "40"
          },
          {
            "value": "50",
            "name": "50"
          }
        ]}
      />
      <Select name="offset" value="" options={
        [
          {
            "value": "",
            "name": "Página"
          },
          {
            "value": "10",
            "name": "10"
          },
          {
            "value": "20",
            "name": "20"
          }
        ]}
      />                 
    </Molecule>
  );
}

export default Filters;