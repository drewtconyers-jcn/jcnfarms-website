import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.69375 3.18429C6.69375 4.77804 5.4 6.06242 3.81563 6.06242C2.22188 6.06242 0.9375 4.76867 0.9375 3.18429C0.9375 1.59054 2.23125 0.30616 3.81563 0.30616C5.4 0.30616 6.69375 1.59991 6.69375 3.18429Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
