import React, { useState, useCallback, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await api('/classes', {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, weekDay, time],
  );

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search" onSubmit={searchTeachers}>
          <div className="search__container">
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={event => setSubject(event.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              value={weekDay}
              onChange={event => setWeekDay(event.target.value)}
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={event => setTime(event.target.value)}
            />
            <button type="submit">Buscar</button>
          </div>
        </form>
      </PageHeader>
      <main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
