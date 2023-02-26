import cn from 'clsx';
import styles from './index.module.scss';

interface IProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

const EWButton = ({ className, children }: IProps) => {
  return (
    <button className={cn(styles.container, className)}>{children}</button>
  );
};

export default EWButton;
