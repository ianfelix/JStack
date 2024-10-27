import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import arrow from '../../assets/icons/row.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import * as S from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  useEffect(() => {
    (async () => {
      const request = await fetch(
        `http://localhost:3333/contacts?orderBy=${orderBy}`,
      );
      const response = await request.json();
      setContacts(response);
    })();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Pesquisar contato..."
        />
      </S.InputSearchContainer>
      <S.Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      {filteredContacts.length > 0 && (
        <S.ListHeader orderBy={orderBy}>
          <button
            type="button"
            className="sort-button"
            onClick={handleToggleOrderBy}
          >
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </S.ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <S.Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {!!contact.category && <small>{contact.category}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}
