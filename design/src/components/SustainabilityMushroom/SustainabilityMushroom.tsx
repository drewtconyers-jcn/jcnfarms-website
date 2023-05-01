import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { Line3Icon } from './Line3Icon.js';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import classes from './SustainabilityMushroom.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 143:220 */
export const SustainabilityMushroom: FC<Props> = memo(function SustainabilityMushroom(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.outsideContainer1}></div>
      <div className={classes.mUSHROOMCONTAINER}>MUSHROOM CONTAINER</div>
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
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <InstagramNegative className={classes.instagramNegative} />
      <div className={classes.uN1}></div>
      <div className={classes.introducesAUniqueAndProteinRic}>
        Introduces a unique and protein-rich food source to areas where it is not feasible to traditionally produce
        mushrooms.
      </div>
      <div className={classes._2}>2</div>
      <div className={classes.containerBasedAgriculturalProd}>
        Container based agricultural production uses innovative and sustainable farming practices to create new job
        opportunities for local communities.
      </div>
      <div className={classes._8}>8</div>
      <div className={classes.highLevelOfLocalScalabilityPro}>
        High level of local scalability promoting agricultural innovation to improve the efficiency and sustainability
        of food production.
      </div>
      <div className={classes._9}>9</div>
      <div className={classes.minimizingWasteAndUtilizingSus}>
        Minimizing waste and utilizing sustainable growing methods to ensure that food production and consumption is
        more sustainable and responsible.
      </div>
      <div className={classes._12}>12</div>
      <div className={classes.createsMultiNationalPartnershi}>
        Creates multi-national partnership and collaboration between different stakeholders in the food production and
        distribution system.
      </div>
      <div className={classes._17}>17</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon2} />
      </div>
      <div className={classes.line3}>
        <Line3Icon className={classes.icon3} />
      </div>
    </div>
  );
});
