import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Card, Icon } from './styles';

export default function Modal({ onClose, open, data }) {
  const history = useHistory();

  const [informations, setInformations] = useState([]);

  const { date_created, title, description } = data;

  const initialValues = {
    date_created,
    title,
    description,
  };

  useEffect(() => {
    const info = localStorage.getItem('@NASA');
    if (info) {
      setInformations(JSON.parse(info));
    }
  }, []);

  function handleEdit({ nasa_id, date_created, title, description }) {
    const findInfo = informations.findIndex((info) => info.nasa_id === nasa_id);

    const auxInformations = [...informations];

    if (findInfo >= 0) {
      auxInformations[findInfo].date_created = date_created;
      auxInformations[findInfo].title = title;
      auxInformations[findInfo].description = description;

      setInformations(auxInformations);

      localStorage.setItem('@NASA', JSON.stringify(informations));
      onClose();

      toast.success('Atualizado com sucesso!');

      history.push('/');
    }
  }

  return (
    open && (
      <Container>
        <Card>
          <Form onSubmit={handleEdit} initialData={initialValues}>
            <h4>ID: </h4>
            <Input type="text" name="nasa_id" value={data.nasa_id} disabled />
            <h4>Data Criação: </h4>
            <Input type="text" name="date_created" />
            <h4>Título:</h4>
            <Input type="text" name="title" />
            <h4>Descrição: </h4>
            <Input multiline name="description" />
            <div>
              <button type="submit">Atualizar</button>
            </div>
            <Icon onClick={onClose} />
          </Form>
        </Card>
      </Container>
    )
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};
Modal.defaultProps = {
  onClose: true,
  open: true,
};
