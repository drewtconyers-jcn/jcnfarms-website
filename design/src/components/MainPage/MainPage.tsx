import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import classes from './MainPage.module.css';
import { Rectangle2Icon } from './Rectangle2Icon.js';
import { Rectangle3Icon } from './Rectangle3Icon.js';
import { Rectangle4Icon } from './Rectangle4Icon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';
import { Rectangle7Icon } from './Rectangle7Icon.js';
import { Rectangle10Icon } from './Rectangle10Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const MainPage: FC<Props> = memo(function MainPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle9}></div>
      <div className={classes.tomatoCloseup1}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.untitledDesignCopy3}></div>
      <div className={classes.hARVESTINGTHEFUTURE}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>HARVESTING </span>
          <span className={classes.label2}>THE</span>
          <span className={classes.label3}> FUTURE.</span>
        </p>
      </div>
      <div className={classes.weBelieveInCreatingASustainabl}>
        We believe in creating a sustainable future for all at the intersection of agriculture and technology.
      </div>
      <div className={classes.ourVisionIsToRevolutionizeTheW}>
        Our vision is to revolutionize the way people connect with and access clean, sustainable, and fresh produce. We
        not only offer innovative solutions but are also producers in our own right.
      </div>
      <div className={classes.ourAgriculturalProduction}>Our agricultural production</div>
      <div className={classes.mitigatingFoodInsecuritiesFarm}>
        <div className={classes.textBlock}>Mitigating food insecurities.</div>
        <div className={classes.textBlock2}>Farming sustainable and efficient.</div>
      </div>
      <div className={classes.ourImpactInControlledEnvironme}>Our impact in controlled environmental agriculture.</div>
      <div className={classes.pMFCBookletOverview1}></div>
      <div className={classes.climateControl}>Climate Control</div>
      <div className={classes.waterManagement}>Water Management</div>
      <div className={classes.energyEfficiency}>Energy Efficiency</div>
      <div className={classes.costEfficiencies}>Cost Efficiencies</div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.agriculture}>Agriculture</div>
      <div className={classes.technology}>Technology</div>
      <div className={classes.produce}>Produce</div>
      <div className={classes.sustainability}>Sustainability</div>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon} />
      </div>
      <div className={classes.ourGoalIsToProvideSolutionsTha}>
        <div className={classes.textBlock3}>
          Our goal is to provide solutions that help producers become more sustainable, efficient, and profitable.{' '}
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.ourTechnology}>Our technology</div>
      <div className={classes.technologyForASustainableFutur}>
        <div className={classes.textBlock5}>Technology for a </div>
        <div className={classes.textBlock6}>sustainable future.</div>
      </div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon3} />
      </div>
      <div className={classes.title1}></div>
      <div className={classes.materialSelection1}></div>
      <div className={classes.ba90211383f7456b9b9eF3e6bad7eb}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.atTheCoreOfOurMissionIsTheGoal}>
        At the core of our mission is the goal to not only provide fresh produce to people, but to also educate them on
        the benefits of consuming clean, sustainable products.{' '}
      </div>
      <div className={classes.ourProduce}>Our produce</div>
      <div className={classes.drivenToProduce}>Driven to produce.</div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle7}>
        <Rectangle7Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes._20230217_10213841}></div>
      <LinkedInNegative />
      <div className={classes.untitledDesignCopy2}></div>
      <div className={classes.copyright2023JCNFarmsAllRights}>Copyright © 2023 JCN Farms - All Rights Reserved.</div>
      <div className={classes.infoJcnfarmsCom}>info@jcnfarms.com</div>
      <div className={classes.concept11}></div>
      <InstagramNegative />
      <div className={classes.rectangle10}>
        <Rectangle10Icon className={classes.icon6} />
      </div>
    </div>
  );
});
