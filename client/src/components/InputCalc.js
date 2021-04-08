import React from 'react';
import './InputCalc.scss';
import CurrencyInput from 'react-currency-input';

const InputCalc = ({ kcalOz, setKcalOz, scoops, setScoops }) => {
  return (
    <div className='header_input'>
      <div>
        <h3>KCAL/ oz.</h3>
        <CurrencyInput
          inputMode='decimal'
          precision='1'
          value={kcalOz}
          onChange={(e, maskedvalue) => {
            setKcalOz(maskedvalue);
          }}
        />
      </div>
      <div>
        <h3 htmlFor='scoops'>#Scoops</h3>
        <CurrencyInput
          inputMode='decimal'
          precision='1'
          value={scoops}
          onChange={(e, maskedvalue) => {
            setScoops(maskedvalue);
          }}
        />
      </div>
    </div>
  );
};

export default InputCalc;
