import React from 'react';
import ReactModal from 'react-modal';

import * as S from './styles';

ReactModal.setAppElement('#root');

type Props = {
  isOpen: boolean;
  title?: string;
  onRequestClose?: () => void;
};

const Modal: React.FC<Props> = ({
  isOpen,
  title,
  onRequestClose,
  children,
  ...rest
}) => (
  <ReactModal
    isOpen={isOpen}
    style={S.style}
    onRequestClose={onRequestClose}
    {...rest}
  >
    {title && <S.Title>{title}</S.Title>}
    {children}
  </ReactModal>
);

export default Modal;
