import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';
import arrow from '../../assets/icons/row.svg';

export default function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </S.Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
