import React from 'react';
import './Result.scss';
import { V, D, W, O } from '../helpers/helpers';

const Result = ({ selectedFormula, kcalOz, scoops }) => {
  const { kcal_Scp, g_poweder_scp, disp } = selectedFormula;

  const Vresult = V(kcal_Scp, kcalOz, scoops);
  const Dresult = D(disp, g_poweder_scp, scoops);
  const Wresult = W(Vresult, Dresult);
  return (
    <div className='section'>
      <h3>Water</h3>
      <p className='section_water-ml'>
        {W(Vresult, Dresult)}
        <span>ml</span>
      </p>
      <p className='section_water-oz'>
        {O(Wresult)}
        <span>oz</span>
      </p>
    </div>
  );
};

export default Result;
