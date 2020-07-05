import React, { useState, useEffect } from 'react';
import api from 'axios';
import { MdList, MdAdd } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import {
  Form,
  Title,
  Cards,
  ListCards,
  Header,
  ContainerButton,
  Screen,
} from './styles';

function Main() {
  const [inputSearch, setInputSearch] = useState('');
  const [informations, setInformations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const infos = localStorage.getItem('@NASA');
    if (infos) {
      setFavorites(JSON.parse(infos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@NASA', JSON.stringify(favorites));
  }, [favorites]);

  async function handleSearch(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await api.get(
        `https://images-api.nasa.gov/search?q=${inputSearch}&media_type=image`
      );

      setInformations(response.data.collection.items);
      setLoading(false);
    } catch (error) {
      toast.error('Erro ao buscar imagens, digite seu termo novamente!');
    }
  }

  function handleFavorites(information) {
    const existingInformation = favorites.find(
      (info) => info.nasa_id === information.nasa_id
    );

    if (existingInformation) {
      toast.error('Item já foi adicionado aos favoritos');
      return;
    }

    setFavorites([...favorites, information]);

    setAddedSuccess(true);

    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  }

  return (
    <>
      <Header>
        <h1>Bem vindo!</h1>
        <button type="button" onClick={() => history.push('/interestlist')}>
          <MdList size={22} />
          Lista de interesses
        </button>
      </Header>

      <Form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o termo de pesquisa para buscar as imagens"
          name="search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="submit">Encontrar</button>
        <span>(Ex: Apollo, Sun, Moon)</span>
      </Form>

      {loading ? (
        <Screen>
          <ReactLoading
            type="spinningBubbles"
            color="#fff"
            height={64}
            width={64}
          />
        </Screen>
      ) : (
        <>
          <Title>Imagens registradas pela NASA:</Title>
          <ListCards>
            {informations.map((information) => (
              <Cards key={information.data[0].nasa_id}>
                <li>
                  <h3>{information.data[0].title}</h3>
                  <figure>
                    <img
                      src={information.links[0].href}
                      alt={information.data[0].title}
                    />
                    <figcaption>{information.data[0].date_created}</figcaption>
                  </figure>
                  <strong>Description:</strong>
                  <p>{information.data[0].description}</p>
                </li>

                <ContainerButton>
                  <button
                    type="button"
                    onClick={() => handleFavorites(information.data[0])}
                  >
                    <MdAdd size={21} />
                    Adicionar a lista de interesses
                  </button>
                </ContainerButton>
              </Cards>
            ))}
          </ListCards>
        </>
      )}

      {addedSuccess && (
        <Screen>
          <FiCheckCircle size={40} color="#39ff14" />
          <h1>Adicionado com sucesso!</h1>
        </Screen>
      )}
    </>
  );
}

export default Main;
