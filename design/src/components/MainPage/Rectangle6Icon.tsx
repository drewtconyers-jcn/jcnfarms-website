import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 190 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H190V3H0V0Z' fill='#4DAC2A' />
  </svg>
);
const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
