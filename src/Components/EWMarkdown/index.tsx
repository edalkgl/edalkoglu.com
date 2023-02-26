import cn from 'clsx';
import styles from './index.module.scss';

import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string | undefined;
}

const EWMarkdown = ({ children, className }: IProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: String(children) }}
      className={cn(styles.container, className)}
    />
  );
};

export default EWMarkdown;
