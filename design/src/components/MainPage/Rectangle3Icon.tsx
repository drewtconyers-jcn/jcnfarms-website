import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 131 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H131V3H0V0Z' fill='#4DAC2A' />
  </svg>
);
const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
