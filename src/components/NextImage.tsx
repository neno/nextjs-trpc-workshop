import Image, { type ImageProps } from "next/image";
import { type FC } from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export const NextImage: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  const imgUrl = src ? `${imageBaseUrl}${src as string}` : "/no-image.png";
  return (
    <Image
      {...props}
      src={imgUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
