import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface IOptionItem {
  value: string;
  label: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: IOptionItem[];
}

const Select: React.FC<ISelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map(optionItem => (
          <option key={optionItem.value} value={optionItem.value}>
            {optionItem.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
