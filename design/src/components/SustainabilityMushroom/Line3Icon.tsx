import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24 -2C25.1046 -2 26 -1.10457 26 -1.74846e-07C26 1.10457 25.1046 2 24 2L24 -2ZM-1.41421 1.41422C-2.19526 0.633167 -2.19526 -0.633163 -1.41421 -1.41421L11.3137 -14.1421C12.0948 -14.9232 13.3611 -14.9232 14.1421 -14.1421C14.9232 -13.3611 14.9232 -12.0948 14.1421 -11.3137L2.82843 1.85088e-06L14.1421 11.3137C14.9232 12.0948 14.9232 13.3611 14.1421 14.1421C13.3611 14.9232 12.0948 14.9232 11.3137 14.1421L-1.41421 1.41422ZM24 2L5.56363e-08 2L-2.94055e-07 -2L24 -2L24 2Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
