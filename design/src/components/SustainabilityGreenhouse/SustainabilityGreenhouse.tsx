import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { Line3Icon } from './Line3Icon.js';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import classes from './SustainabilityGreenhouse.module.css';

interface Props {
  className?: string;
}
/* @figmaId 43:112 */
export const SustainabilityGreenhouse: FC<Props> = memo(function SustainabilityGreenhouse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.greenhouseBaskets2}></div>
      <div className={classes.mEXICOGREENHOUSE}>MEXICO GREENHOUSE</div>
      <div className={classes.greenhouseBaskets1}></div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.untitledDesignCopy3}></div>
      <div className={classes.agriculture}>Agriculture</div>
      <div className={classes.technology}>Technology</div>
      <div className={classes.produce}>Produce</div>
      <div className={classes.sustainability}>Sustainability</div>
      <div className={classes.rectangle8}></div>
      <div className={classes._20230217_10213841}></div>
      <LinkedInNegative className={classes.linkedInNegative} />
      <div className={classes.untitledDesignCopy2}></div>
      <div className={classes.copyright2023JCNFarmsAllRights}>Copyright © 2023 JCN Farms - All Rights Reserved.</div>
      <div className={classes.infoJcnfarmsCom}>info@jcnfarms.com</div>
      <InstagramNegative className={classes.instagramNegative} />
      <div className={classes.uN1}></div>
      <div className={classes.producingTOVAtScaleEnablesUsTh}>
        Producing TOV at scale enables us the ability to provide consistent, fresh, and abundant product to distributors
        at a fair price
      </div>
      <div className={classes._2}>2</div>
      <div className={classes.bloomingCreatesJobsForImpoveri}>
        Blooming creates jobs for impoverished communities in Mexico and provides prospects previously unavailable
      </div>
      <div className={classes._8}>8</div>
      <div className={classes.highLevelOfPotentialScalabilit}>
        High level of potential scalability promoting industrialization and agricultural innovation
      </div>
      <div className={classes._9}>9</div>
      <div className={classes.indoorControlledEnvironmentAgr}>
        Indoor controlled environment agriculture enables year round production and facilitates controlled sustainable
        agriculture
      </div>
      <div className={classes._12}>12</div>
      <div className={classes.ourCrossBorderTradeBetweenMexi}>
        Our cross-border trade between Mexico and the US highlights the importance and dependence of regional trade
      </div>
      <div className={classes._17}>17</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon} />
      </div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon2} />
      </div>
    </div>
  );
});
