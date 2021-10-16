import React from 'react';
import PropTypes from 'prop-types';

const InputTextfield = ({ label, type, name, value, onDataChange, error }) => {
  const getInputClasses = () => {
    // if (name === 'surname' || name === 'birthyear') return 'form-control';
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <input
        className={getInputClasses()}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onDataChange}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
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
  error: PropTypes.string,
};

export default InputTextfield;
