import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, onDelete }) {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
