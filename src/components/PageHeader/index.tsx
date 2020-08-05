import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <header className="header">
      <div className="header__top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header__content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
