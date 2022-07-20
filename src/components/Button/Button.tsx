import { ReactElement } from "react";
import styles from "./Button.module.scss";

interface IButton {
  mode: "primary" | "secondary";
  backgroundColor?: string;
  size: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const btnSizes = {
  large: styles.storybookButtonLarge,
  medium: styles.storybookButtonMedium,
  small: styles.storybookButtonSmall,
};

const btnMode = {
  primary: styles.storybookButtonPrimary,
  secondary: styles.storybookButtonSecondary,
};

const Button = ({
  mode = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: IButton): ReactElement => (
  <button
    type="button"
    className={`${styles.storybookButton}  ${btnSizes[size]}  ${btnMode[mode]}`}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);

export default Button;
