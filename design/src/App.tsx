import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainPage } from './components/MainPage/MainPage';
import { AgricultureContainer } from './components/AgricultureContainer/AgricultureContainer';
import { TechnologyPMFCInfo } from './components/TechnologyPMFCInfo/TechnologyPMFCInfo';
import { SustainabilityGreenhouse } from './components/SustainabilityGreenhouse/SustainabilityGreenhouse';
import { SustainabilityMushroom } from './components/SustainabilityMushroom/SustainabilityMushroom';


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {/* Change this to different components to view pages */}
      <MainPage />
    </div>
  );
});
