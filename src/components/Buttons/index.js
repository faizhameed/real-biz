import React from 'react';

import cx from 'classnames';
import styles from './index.scss';

const Button = ({ children, className }) => {
  return (
    <button
      className={cx(styles.btn, {
        [className]: !!className,
      })}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
