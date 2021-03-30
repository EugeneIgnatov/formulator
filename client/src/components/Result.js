import React from 'react';
import './Result.scss';
import { V, D, W, O } from '../helpers/helpers';

const Result = ({ selectedFormula, kcalOz, scoops }) => {
  const {
    kcal_Scp,
    kcal_g,
    // g_prot_g_poweder,
    g_poweder_scp,
    // g_poweder_level_cup,
    // g_poweder_tbls,
    // g_poweder_tsp,
    disp,
    g_poweder_can,
    // oz_lbs_powder_can,
  } = selectedFormula;

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
