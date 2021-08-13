import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          onChange={onChange}
          className={s.fieldInput}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
