import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import classes from './MainPage.module.css';
import { Mitigating_underlineIcon } from './Mitigating_underlineIcon.js';
import { Produce_underline_2Icon } from './Produce_underline_2Icon.js';
import { Produce_underlineIcon } from './Produce_underlineIcon.js';
import { Production_underlineIcon } from './Production_underlineIcon.js';
import { Tech_underlineIcon2 } from './Tech_underlineIcon2.js';
import { Tech_underlineIcon } from './Tech_underlineIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 167:45 */
export const MainPage: FC<Props> = memo(function MainPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.tomato_background}></div>
      <div className={classes.tomato_closeup}></div>
      <div className={classes.top_background}></div>
      <div className={classes.jcn_farms_logo_white}></div>
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
      <div className={classes.climateControl}>Climate Control</div>
      <div className={classes.waterManagement}>Water Management</div>
      <div className={classes.energyEfficiency}>Energy Efficiency</div>
      <div className={classes.costEfficiencies}>Cost Efficiencies</div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.agriculture}>Agriculture</div>
      <div className={classes.technology}>Technology</div>
      <div className={classes.produce}>Produce</div>
      <div className={classes.sustainability}>Sustainability</div>
      <div className={classes.production_underline}>
        <Production_underlineIcon className={classes.icon} />
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
      <div className={classes.tech_underline}>
        <Tech_underlineIcon className={classes.icon2} />
      </div>
      <div className={classes.mitigating_underline}>
        <Mitigating_underlineIcon className={classes.icon3} />
      </div>
      <div className={classes.pmfc_concept}></div>
      <div className={classes.vine_conept}></div>
      <div className={classes.mushrooms}></div>
      <div className={classes.produce_background_white}></div>
      <div className={classes.atTheCoreOfOurMissionIsTheGoal}>
        At the core of our mission is the goal to not only provide fresh produce to people, but to also educate them on
        the benefits of consuming clean, sustainable products.{' '}
      </div>
      <div className={classes.ourProduce}>Our produce</div>
      <div className={classes.drivenToProduce}>Driven to produce.</div>
      <div className={classes.produce_underline_2}>
        <Produce_underline_2Icon className={classes.icon4} />
      </div>
      <div className={classes.produce_underline}>
        <Produce_underlineIcon className={classes.icon5} />
      </div>
      <div className={classes.socials_background}></div>
      <div className={classes.socials_mushrooms}></div>
      <LinkedInNegative className={classes.linkedInNegative} />
      <div className={classes.jcn_logo_white}></div>
      <div className={classes.copyright2023JCNFarmsAllRights}>Copyright © 2023 JCN Farms - All Rights Reserved.</div>
      <div className={classes.infoJcnfarmsCom}>info@jcnfarms.com</div>
      <div className={classes.concept_image}></div>
      <InstagramNegative className={classes.instagramNegative} />
      <div className={classes.tech_underline2}>
        <Tech_underlineIcon2 className={classes.icon6} />
      </div>
      <div className={classes.climate_control}></div>
      <div className={classes.cost_inefficiency}></div>
      <div className={classes.energy_efficiency}></div>
      <div className={classes.water_management}></div>
    </div>
  );
});
