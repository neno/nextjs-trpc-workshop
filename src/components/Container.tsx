import { type FC, type ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="w-full px-4 sm:px-6 lg:px-8">{children}</div>
);
