import { useUI } from "@contexts/ui.context";
import Modal from "./modal";
import Newsletter from "../newsletter";
const ManagedModal: React.FC = () => {
    const { displayModal, closeModal, modalView } = useUI();
    return (
        <Modal open={displayModal} onClose={closeModal}>
            {modalView === "NEWSLETTER_VIEW" && <Newsletter />}
        </Modal>
    );
};

export default ManagedModal;
