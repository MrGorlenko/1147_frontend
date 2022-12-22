import Modal from 'react-bootstrap/Modal';
export const ModalComponent = ({ show, onHide, children }) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			centered
			className="custom-modal">
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
};
