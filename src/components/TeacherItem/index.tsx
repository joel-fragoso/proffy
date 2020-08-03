import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teachers">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/20667377?v=4"
          alt="Joel Fragoso"
        />
        <div>
          <strong>Joel Fragoso</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo dolor
        ex neque omnis nihil placeat necessitatibus mollitia.
        <br />
        Ad maiores labore et nemo quia enim fugit mollitia obcaecati maxime
        quae?
      </p>
      <footer>
        <p>
          preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
