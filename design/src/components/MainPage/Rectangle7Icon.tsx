import { memo, SVGProps } from 'react';

const Rectangle7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 95 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H95V3H0V0Z' fill='#4DAC2A' />
  </svg>
);
const Memo = memo(Rectangle7Icon);
export { Memo as Rectangle7Icon };
