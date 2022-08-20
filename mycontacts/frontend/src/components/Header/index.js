import * as S from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <S.Container>
      <img src={logo} alt="My contacts" />
    </S.Container>
  );
}
