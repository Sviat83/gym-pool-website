import React from "react";
import styles from "./Modal.module.css";
import ModalContent from "./ModalContent";

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
               <ModalContent onClose={onClose} />
            </div>
        </div>
    );
};
export default Modal;