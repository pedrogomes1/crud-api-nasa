import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { MdDeleteForever, MdEdit } from 'react-icons/md';

import Modal from '../../components/Modal';

import { Container, Table } from './styles';

export default function InterestList() {
  const [informations, setInformations] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const info = localStorage.getItem('@NASA');
    if (info) {
      setInformations(JSON.parse(info));
    }
  }, []);

  useEffect(() => {
    console.log(informations);
    localStorage.setItem('@NASA', JSON.stringify(informations));
  }, [informations]);

  function handleDelete(info) {
    const deleteInfo = window.confirm('Deseja remover o item?');

    if (deleteInfo) {
      setInformations(
        informations.filter((element) => element.nasa_id !== info)
      );
    }
  }

  function handleEdit(info) {
    setOpenModal(true);
    setData(info);
  }

  return (
    <Container>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
      <Table>
        <thead>
          <tr>
            <th>Nasa ID</th>
            <th>Data Criação</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {informations.map((info) => (
            <tr key={info.nasa_id}>
              <td>{info.nasa_id}</td>
              <td>{info.date_created}</td>
              <td>{info.title}</td>
              <td>{info.description}</td>
              <td>
                <div>
                  <button type="button">
                    <MdEdit
                      size={21}
                      color="#fff8"
                      onClick={() => handleEdit(info)}
                    />
                  </button>
                  |
                  <button
                    type="button"
                    onClick={() => handleDelete(info.nasa_id)}
                  >
                    <MdDeleteForever size={21} color="#fff8" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal open={openModal} data={data} onClose={() => setOpenModal(false)} />
    </Container>
  );
}
