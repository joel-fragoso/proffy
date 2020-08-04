import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search">
          <div className="search__container">
            <div className="search__input">
              <label htmlFor="search__input-subject">Matéria</label>
              <input type="text" id="search__input-subject" />
            </div>
            <div className="search__input">
              <label htmlFor="search__input-week-day">Dia da semana</label>
              <input type="text" id="search__input-week-day" />
            </div>
            <div className="search__input">
              <label htmlFor="search__input-time">Horas</label>
              <input type="text" id="search__input-time" />
            </div>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
