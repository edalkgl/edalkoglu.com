import cn from 'clsx';
import styles from './index.module.scss';

import Link from 'next/link';

interface IProps {
  className?: string | undefined;
  href: string;
  children?: React.ReactNode;
  target?: string;
  ariaLabel?: string;
}

const EWLink = ({ className, href, children, target, ariaLabel }: IProps) => {
  return (
    <Link
      href={href}
      target={target}
      aria-label={ariaLabel}
      className={cn(styles.container, className)}>
      {children}
    </Link>
  );
};

export default EWLink;
