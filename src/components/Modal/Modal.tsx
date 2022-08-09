import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children?: JSX.Element[];
  setCheckOpenModal: (check: boolean) => void;
  _width: string;
  _height: string; 
}

const Modal: React.FC<ModalProps> = ({ 
  children, 
  setCheckOpenModal,
  _width,
  _height, 
}) => {
  const modalRef: any = useRef();

  const clickModalOutside = (e: MouseEvent) => {
    if (!modalRef.current.contains(e.target)) {
      setCheckOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    }
  }, []);

  return (
    <ModalWrap>
      <ModalContWrap 
        ref={modalRef}
        _width={_width} 
        _height={_height} 
      >
        {children}
      </ModalContWrap>
    </ModalWrap>
  );
};

type StyledType = {
  _width: string;
  _height: string;
}

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.5);
  z-index: 10000;
`;

const ModalContWrap = styled.div<StyledType>`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  width: ${props => props._width ? props._width : "100px"};
  height: ${props => props._height ? props._height : "100px"};;
  background-color: #fff;
  border-radius: 4px;
  transform: translate(-50%, -50%);
`;

export default Modal;