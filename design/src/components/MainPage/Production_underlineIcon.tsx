import { memo, SVGProps } from 'react';

const Production_underlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 405 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H405V3H0V0Z' fill='#4DAC2A' />
  </svg>
);
const Memo = memo(Production_underlineIcon);
export { Memo as Production_underlineIcon };
