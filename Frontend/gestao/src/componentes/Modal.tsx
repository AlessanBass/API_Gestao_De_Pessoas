import React, { Children, ReactNode } from 'react';
import styles from "../styles/modal.module.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // Tipo explicitamente definido como ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps){
    if (!isOpen) return null;

    return(
        <div className={`${styles.containerModal}`} onClick={onClose}>
            <div className={`${styles.modal}`} onClick={(e) => e.stopPropagation()}> 
               {children}
            </div>
        </div>
    )
}