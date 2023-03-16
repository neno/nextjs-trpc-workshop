import { FC, ReactNode } from 'react';
import { NextImage } from './NextImage';

interface CardProps {
  title: string;
  poster_path: string;
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ title, poster_path, children }) => {
  return (
    <div
      className={`relative w-full h-full aspect-[2/3] hover:shadow-xl shadow-primary bg-gray-300`}
    >
      <NextImage
        src={poster_path}
        alt={title}
        className='w-full h-full object-cover object-center'
        sizes='(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw'
        width={640}
        height={960}
      />
      <div className='absolute bottom-0 right-0'>{children}</div>
    </div>
  );
};
