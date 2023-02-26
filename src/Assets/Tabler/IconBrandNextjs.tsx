import { IAssets } from '@/src/Shared/types';

const IconBrandNextjs = (props: IAssets) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
      <path d="M15 12v-3"></path>
    </svg>
  );
};

export default IconBrandNextjs;
