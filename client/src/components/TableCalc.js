import React from 'react';
import './TableCals.scss';
import { V, D, P, F } from '../helpers/helpers';

const TableCalc = ({ selectedFormula, kcalOz, scoops }) => {
  const { kcal_Scp, g_poweder_scp, disp } = selectedFormula;

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
