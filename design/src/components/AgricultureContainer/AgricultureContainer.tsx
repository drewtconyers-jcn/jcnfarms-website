import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AgricultureContainer.module.css';
import { InstagramNegative } from './InstagramNegative/InstagramNegative';
import { LinkedInNegative } from './LinkedInNegative/LinkedInNegative';
import { Rectangle11Icon } from './Rectangle11Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 47:271 */
export const AgricultureContainer: FC<Props> = memo(function AgricultureContainer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.jcnLogoBlack1}></div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.agriculture}>Agriculture</div>
      <div className={classes.technology}>Technology</div>
      <div className={classes.greenhouseFarm}>Greenhouse Farm</div>
      <div className={classes.austinGourmetMushroomProductio}>Austin gourmet mushroom production.</div>
      <div className={classes.containerFarm}>Container Farm</div>
      <div className={classes.produce}>Produce</div>
      <div className={classes.sustainability}>Sustainability</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.pink2}></div>
      <LinkedInNegative className={classes.linkedInNegative} />
      <div className={classes.untitledDesignCopy2}></div>
      <div className={classes.copyright2023JCNFarmsAllRights}>Copyright © 2023 JCN Farms - All Rights Reserved.</div>
      <div className={classes.infoJcnfarmsCom}>info@jcnfarms.com</div>
      <InstagramNegative className={classes.instagramNegative} />
      <div className={classes.rectangle11}>
        <Rectangle11Icon className={classes.icon} />
      </div>
      <div className={classes.text}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.yellow_oyster1}></div>
      <div className={classes.adapt1}></div>
      <div className={classes.cultivatdLogoWideColorNoSubtex}></div>
      <div className={classes.ourGourmetMushroomsAreGrownInC}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>
            Our gourmet mushrooms are grown in custom fabricated shipping containers, utilizing patented growing
            methodologies from our partners. With a growing time of only{' '}
          </span>
          <span className={classes.label2}>7-10 days for most varieties of mushrooms</span>
          <span className={classes.label3}>, we are able to produce </span>
          <span className={classes.label4}>4500 pounds of diversified mushrooms per month.</span>
        </p>
      </div>
      <div className={classes.ourContainer}>Our container.</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.blueSide1}></div>
      <div className={classes.austinRestaurantsOrderHere}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label5}>Austin restaurants order </span>
          <span className={classes.label6}>here.</span>
        </p>
      </div>
      <div className={classes.containerEdit1}></div>
      <div className={classes.farmAnywhereV21}></div>
    </div>
  );
});
