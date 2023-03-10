import cn from 'clsx';
import styles from './index.module.scss';

import Image from 'next/image';

interface IProps {
  alt: string;
  src: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string | undefined;
  quality?: number | undefined;
  priority?: boolean | undefined;
}

const EWImage = ({
  alt,
  src,
  width,
  height,
  quality,
  priority,
  className
}: IProps) => {
  return (
    <picture className={cn(styles.container, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
      />
    </picture>
  );
};

export default EWImage;
