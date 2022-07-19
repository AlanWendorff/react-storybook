import { ReactElement } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  id: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  [x: string]: unknown;
}

const TextInput = ({
  id,
  className,
  label,
  disabled,
  ...attributes
}: TextInputProps): ReactElement => (
  <div className={`${className} ${styles.textInput}`}>
    {label && (
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    )}
    <div className={styles.inputContainer}>
      <input id={id} type="text" disabled={disabled} {...attributes} />
      {disabled && <span>icon</span>}
    </div>
  </div>
);

export default TextInput;
