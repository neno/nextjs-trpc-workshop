import { clsxm } from "~/lib/helpers";
import Link from "next/link";
import { type FC, type ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mode?: "primary" | "secondary" | "tertiary" | "danger";
  type?: "button" | "submit" | "reset";
  path?: string;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  path,
  onClick,
  type = "button",
  mode = "primary",
  className = "",
  disabled = false,
}) => {
  const styles = clsxm(
    "inline-block relative px-4 py-2 font-medium color-white bg-black",
    {
      // 'bg-primary text-white': mode === 'primary',
      // 'bg-danger text-white': mode === 'danger',
      className,
    }
  );

  if (path) {
    return (
      <Link href={path} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={styles}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
