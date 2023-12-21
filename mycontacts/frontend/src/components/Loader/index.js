import { createPortal } from 'react-dom';

import * as S from './styles';

export function Loader() {
  return createPortal(
    <S.Overlay>
      <div className="loader" />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}
