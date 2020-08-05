import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<ITextareaProps> = ({
  children,
  name,
  label,
  ...rest
}) => {
  return (
    <div className="textarea">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}>
        {children}
      </textarea>
    </div>
  );
};

export default Textarea;
