import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={29} cy={29} r={29} stroke='white' strokeWidth={4} />
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
