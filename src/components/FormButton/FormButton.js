import React from 'react';
import s from './FormButton.module.css';
import PropTypes from 'prop-types';

export default function FormButton({
  type = 'button',
  label,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={s.button}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

FormButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
