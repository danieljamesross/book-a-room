import { HTMLProps } from 'react';

import styles from './button.module.css';

const Button = ({ onClick, children }: HTMLProps<HTMLButtonElement>) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
