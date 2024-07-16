import PropTypes from 'prop-types';

import { InputGroupStyle } from './style';

export function Input({ name, label, type, placeholder, children, value, onChange }) {
  const isTextArea = type === 'textarea';
  const isSelect = type === 'select';

  return (
    <InputGroupStyle>
      <label htmlFor={name}>{label}</label>
      {isTextArea && (
        <textarea
          required
          placeholder={placeholder}
          name={name}
          rows="8"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      )}
      {isSelect && (
        <select required value={value} name={name} onChange={(e) => onChange(e.target.value)}>
          {children}
        </select>
      )}
      {!isTextArea && !isSelect && (
        <input
          value={value}
          required
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </InputGroupStyle>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
