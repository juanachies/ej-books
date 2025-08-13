import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const Mymodal = ({ show, onClose, onConfirm }) => {
    

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Accion</Modal.Title>
            </Modal.Header>

            <Modal.body>
                <p>Estas seguro de que quieres eliminar este libro?</p>
            </Modal.body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>

                <Button variant="primary" onClick={onConfirm}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyModal;