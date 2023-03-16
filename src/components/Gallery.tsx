import { type FC, type ReactNode } from "react";
import { clsxm } from "~/lib/helpers";

interface GalleryProps {
  children: ReactNode;
  className?: string;
}

export const Gallery: FC<GalleryProps> = ({ children, className }) => (
  <div className={clsxm("grid grid-cols-6 gap-8", className)}>{children}</div>
);
