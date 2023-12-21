import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/row.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import * as S from './styles';
import { Loader } from '../../components/Loader';
// import { Modal } from '../../components/Modal';

export default function Home() {
  return (
    <S.Container>
      {/* <Modal danger /> */}
      <Loader />
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </S.InputSearchContainer>
      <S.Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Ian Felix</strong>
              <small>instagram</small>
            </div>
            <span>ianfelix030@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Ian Felix</strong>
              <small>instagram</small>
            </div>
            <span>ianfelix030@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Ian Felix</strong>
              <small>instagram</small>
            </div>
            <span>ianfelix030@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Ian Felix</strong>
              <small>instagram</small>
            </div>
            <span>ianfelix030@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/edit/1">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
