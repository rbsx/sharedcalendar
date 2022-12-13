import { Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

type BackdropsProps = { onClose: () => void };
const Backdrop = (props: BackdropsProps) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

type OverlayProps = { children: ReactNode };
const ModalOverlay = (props: OverlayProps) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

type ModalProps = BackdropsProps & OverlayProps;
const modalPlaceholderElement = document.getElementById('modal-placeholder')!;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {/* Use createPortal to render the child at the placeholder */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        modalPlaceholderElement
      )}

      {/* Use createPortal to render the child at the placeholder */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPlaceholderElement
      )}
    </Fragment>
  );
};

export default Modal;
