import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 0.671875C6.19375 0.671875 0.671875 6.19375 0.671875 13C0.671875 19.8062 6.19375 25.3281 13 25.3281C19.8062 25.3281 25.3281 19.8062 25.3281 13C25.3281 6.19375 19.8062 0.671875 13 0.671875ZM13 20.9969C8.58438 20.9969 5.00312 17.4156 5.00312 13C5.00312 8.58438 8.58438 5.00312 13 5.00312C17.4156 5.00312 20.9969 8.58438 20.9969 13C20.9969 17.4156 17.4156 20.9969 13 20.9969Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
