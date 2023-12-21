import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import * as S from './styles';

export function Modal({ danger }) {
  return createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>Conteúdo do modal</p>

        <S.Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
