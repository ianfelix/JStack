import arrow from '../../assets/icons/row.svg';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </S.InputSearchContainer>
      <S.Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </S.Header>

      <hr className="line" />

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {/* <Card /> */}
      </S.ListContainer>
    </S.Container>
  );
}
