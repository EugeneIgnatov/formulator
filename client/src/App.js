import './App.scss';
import { useState } from 'react';

import Select from './components/Select';
import SelectTable from './components/SelectTable';

import data from './data';
import InputCalc from './components/InputCalc';
import Result from './components/Result';
import TableCalc from './components/TableCalc';
import Desktop from './shared/Desktop';
import Mobile from './shared/Mobile';

function App() {
  const [formula, setFormula] = useState('Elecare Infant');
  const selectedFormula = data.find((f) => f.name === formula);

  const [kcalOz, setKcalOz] = useState(0);
  const [scoops, setScoops] = useState(0);

  return (
    <div className='App'>
      <Desktop>
        <div>
          <Select formula={formula} setFormula={setFormula} />
          <SelectTable selectedFormula={selectedFormula} />
          <TableCalc
            selectedFormula={selectedFormula}
            kcalOz={kcalOz}
            scoops={scoops}
          />
        </div>
        <div>
          <InputCalc
            kcalOz={kcalOz}
            setKcalOz={setKcalOz}
            scoops={scoops}
            setScoops={setScoops}
          />
          <Result
            selectedFormula={selectedFormula}
            kcalOz={kcalOz}
            scoops={scoops}
          />
        </div>
      </Desktop>
      <Mobile>
        <Result
          selectedFormula={selectedFormula}
          kcalOz={kcalOz}
          scoops={scoops}
        />
        <Select formula={formula} setFormula={setFormula} />
        <InputCalc
          kcalOz={kcalOz}
          setKcalOz={setKcalOz}
          scoops={scoops}
          setScoops={setScoops}
        />
        <SelectTable selectedFormula={selectedFormula} />
        <TableCalc
          selectedFormula={selectedFormula}
          kcalOz={kcalOz}
          scoops={scoops}
        />
      </Mobile>
    </div>
  );
}

export default App;
