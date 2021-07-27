import React from 'react';

import cx from 'classnames';
import styles from './index.scss';

interface IProps {
  btnClass?: string;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, btnClass }: IProps) => {
  const handleClick = () => {};
  // var className: string;
  return (
    <button
      className={cx(styles.btn, {
        [btnClass as string]: !!btnClass,
      })}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  btnClass: 'undefined',
};
