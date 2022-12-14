import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from './route-pages/welcome';
import { Clock } from './route-pages/clock';
import { VfmCalc } from './route-pages/vfmCalc';
import { Challenge_1 } from './route-pages/challenge_1/Challenge_1';
import { Challenge_2 } from './route-pages/challenge_2/Challenge_2';
import { Challenge_3 } from './route-pages/challenge_3/Challenge_3';
import { Challenge_4 } from './route-pages/challenge_4/Challenge_4';
import { Challenge_5 } from './route-pages/challenge_5/Challenge_5';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Challenge_1" element={<Challenge_1 />} />
          <Route path="/Challenge_2" element={<Challenge_2 />} />
          <Route path="/Challenge_3" element={<Challenge_3 />} />
          <Route path="/Challenge_4" element={<Challenge_4 />} />
          <Route path="/Challenge_5" element={<Challenge_5 />} />
          <Route path='/Clock' element={<Clock />} />
          <Route path='/VfmCalc' element={<VfmCalc />} />
        </Routes>
        {/* <AppFooter /> */}
      </Router>
    </div>
  );
}

export default App;
