import styles from "./index.module.scss";
import cn from "classnames";
import Image from "next/image";

interface IProps {
  alt: string;
  src: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string | undefined;
  priority?: boolean | undefined;
}

const EWImage = ({ alt, src, width, height, priority, className }: IProps) => {
  return (
    <picture className={cn(styles.container, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </picture>
  );
};

export default EWImage;
