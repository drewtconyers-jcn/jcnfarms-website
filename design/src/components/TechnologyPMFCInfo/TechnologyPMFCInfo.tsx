import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import { Rectangle3Icon } from './Rectangle3Icon.js';
import classes from './TechnologyPMFCInfo.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 143:146 */
export const TechnologyPMFCInfo: FC<Props> = memo(function TechnologyPMFCInfo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes._20230217_10213841}></div>
      <LinkedInNegative className={classes.linkedInNegative} />
      <div className={classes.iMG_97521}></div>
      <div className={classes.untitledDesignCopy2}></div>
      <div className={classes.copyright2023JCNFarmsAllRights}>Copyright © 2023 JCN Farms - All Rights Reserved.</div>
      <div className={classes.infoJcnfarmsCom}>info@jcnfarms.com</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <InstagramNegative className={classes.instagramNegative} />
      <div className={classes.plantMicrobialFuelCell}>Plant Microbial Fuel Cell</div>
      <div className={classes.vine}>Vine</div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon2} />
      </div>
      <div className={classes.vertRender1}></div>
      <div className={classes.energyCost1}></div>
      <div className={classes.jcnLogoBlack1}></div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.agriculture}>Agriculture</div>
      <div className={classes.technology}>Technology</div>
      <div className={classes.produce}>Produce</div>
      <div className={classes.sustainability}>Sustainability</div>
      <div className={classes.energyUsageCanAccountForUpTo60}>
        <div className={classes.textBlock}>
          Energy usage can account for up to 60% of total operating costs in CEA facilities, with lighting alone
          representing around 50%.{' '}
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}></p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label}>Our goal is to solve this issue within the industry.</span>
          </p>
        </div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper3}></p>
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
      <div className={classes.selfPoweredIoTDevicesInAgricul}>
        <div className={classes.textBlock6}>
          Self-powered IoT devices in agriculture use energy harvested from wind, sunlight, and motion. However, these
          methods don&#39;t work indoors. PMFCs enable indoor energy harvesting, providing sustainable and reliable
          power for data collection to provide insights into CEA farms&#39; efficiency.
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper4}></p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle10}></div>
      <div className={classes.theProblem}>The problem.</div>
      <div className={classes.ourInitialProductLaunchIntegra}>
        <div className={classes.textBlock9}>
          Our initial product launch integrating PMFCs into data collection devices will lead us to develop the research
          necessary to implement facility wide energy harvesting systems to supplement and or replace traditional energy
          sources in CEA farms.{' '}
        </div>
        <div className={classes.textBlock10}>
          <p className={classes.labelWrapper5}></p>
        </div>
        <div className={classes.textBlock11}>
          We are creating self-sustaining food production systems that reduce carbon footprints and offer greater energy
          independence for CEA farms. We are building resilience in the agricultural industry.
        </div>
      </div>
      <div className={classes.pmfcIot1}></div>
      <div className={classes.selfPoweredDataCaptureDevicesF}>
        Self powered data capture devices for indoor farming.
      </div>
    </div>
  );
});
