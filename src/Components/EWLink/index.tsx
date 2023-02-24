import Link from "next/link";
import { Children } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

interface IProps {
  className?: string | undefined;
  href: string;
  children?: React.ReactNode;
  target?: string;
  
}

const EWLink = ({ className, href, children,target }: IProps) => {
  return (
    <Link href={href} target={target} className={cn(styles.container, className)}>
      {children}
    </Link>
  );
};

export default EWLink;
