import { memo, FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainPage } from './components/MainPage/MainPage';
import { AgricultureContainer } from './components/AgricultureContainer/AgricultureContainer';
import { TechnologyPMFCInfo } from './components/TechnologyPMFCInfo/TechnologyPMFCInfo';
import { SustainabilityGreenhouse } from './components/SustainabilityGreenhouse/SustainabilityGreenhouse';
import { SustainabilityMushroom } from './components/SustainabilityMushroom/SustainabilityMushroom';
import { CustomNavbar } from './CustomNavbar';

interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <CustomNavbar />
          <Routes>
           <Route path="/" element={<MainPage />} />
           <Route path="/agriculture" element={<AgricultureContainer />} />
            <Route path="/technology" element={<TechnologyPMFCInfo />} />
            <Route path="/sustainability/greenhouse" element={<SustainabilityGreenhouse />} />
            <Route path="/sustainability/mushroom" element={<SustainabilityMushroom />} />
          </Routes>
        </div>
    </Router>
  );
});
