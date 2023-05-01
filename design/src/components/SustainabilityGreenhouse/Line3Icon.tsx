import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.74846e-07 -2C-1.10457 -2 -2 -1.10457 -2 -1.74846e-07C-2 1.10457 -1.10457 2 -1.74846e-07 2L1.74846e-07 -2ZM25.4142 1.41422C26.1953 0.633167 26.1953 -0.633163 25.4142 -1.41421L12.6863 -14.1421C11.9052 -14.9232 10.6389 -14.9232 9.85787 -14.1421C9.07682 -13.3611 9.07682 -12.0948 9.85787 -11.3137L21.1716 1.85088e-06L9.85786 11.3137C9.07681 12.0948 9.07681 13.3611 9.85786 14.1421C10.6389 14.9232 11.9052 14.9232 12.6863 14.1421L25.4142 1.41422ZM-1.74846e-07 2L24 2L24 -2L1.74846e-07 -2L-1.74846e-07 2Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
