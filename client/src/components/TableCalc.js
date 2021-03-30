import React from 'react';
import './TableCals.scss';
import { V, D, P, F } from '../helpers/helpers';

const TableCalc = ({ selectedFormula, kcalOz, scoops }) => {
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
  // console.log(selectedFormula, 'selectedform');
  // console.log(kcalOz);
  // console.log(scoops);
  return (
    <>
      <hr></hr>
      <div className='table-calc'>
        <div>
          Total dislp (ml)
          <p>{D(disp, g_poweder_scp, scoops)}</p>
        </div>
        <div>
          Total g Powder
          <p>{P(g_poweder_scp, scoops)}</p>
        </div>
        <div>
          Form. Total Vol.
          <p>{V(kcal_Scp, kcalOz, scoops)}</p>
        </div>
        <div>
          Total Cals/ Form.
          <p>{F(kcal_Scp, scoops)}</p>
        </div>
      </div>
    </>
  );
};

export default TableCalc;
