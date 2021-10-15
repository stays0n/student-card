import React from 'react';
import PropTypes from 'prop-types';

const InputTextfield = ({ label, type, name, value, onDataChange }) => {
  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form-control'
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onDataChange}
      />
    </div>
  );
};

InputTextfield.defaultProps = {
  type: 'text',
};

InputTextfield.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
};

export default InputTextfield;
