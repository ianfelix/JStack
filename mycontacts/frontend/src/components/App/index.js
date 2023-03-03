import { ThemeProvider } from 'styled-components';
import { Routes } from '../../Routes';
import GlobalStyles from '../../styles/global';
import defaultTheme from '../../styles/themes/default';
import { Header } from '../Header';
import * as S from './styles';

function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <S.Container>
        <Header />
        <Routes />
      </S.Container>
    </ThemeProvider>

  );
}

export default App;
