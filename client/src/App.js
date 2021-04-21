import './App.scss';
import { useState } from 'react';

import Select from './components/Select';
import SelectTable from './components/SelectTable';

import data from './data';
import InputCalc from './components/InputCalc';
import Result from './components/Result';
import TableCalc from './components/TableCalc';

function App() {
  const [formula, setFormula] = useState('Elecare Infant');
  const selectedFormula = data.find((f) => f.name === formula);

  const [kcalOz, setKcalOz] = useState(0);
  const [scoops, setScoops] = useState(0);

  return (
    <div className='App'>
      <main className='container'>
        <div className='selected-formula'>
          <Select formula={formula} setFormula={setFormula} />
        </div>
        <div className='input-mode'>
          <InputCalc
            kcalOz={kcalOz}
            setKcalOz={setKcalOz}
            scoops={scoops}
            setScoops={setScoops}
          />
        </div>
        <div className='data'>
          <SelectTable selectedFormula={selectedFormula} />
        </div>
        <div className='results'>
          <Result
            selectedFormula={selectedFormula}
            kcalOz={kcalOz}
            scoops={scoops}
          />
        </div>
        <div className='table-result'>
          <TableCalc
            selectedFormula={selectedFormula}
            kcalOz={kcalOz}
            scoops={scoops}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
