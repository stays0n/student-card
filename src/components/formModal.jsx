import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const FormModal = ({ state, onClose }) => {
  return (
    <Modal show={state} onHide={onClose} backdrop='static' keyboard={false}>
      <Modal.Body>Обновлено!</Modal.Body>
      <Modal.Footer>
        <Link className='btn' to='/' onClick={onClose}>
          Close
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

FormModal.propTypes = {
  state: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormModal;
