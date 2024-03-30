import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true);
    }
    
    const hideModalHandler = () => {
        setShowModal(false);
    }

    return <ModalContext.Provider value={{showModal, showModalHandler, hideModalHandler}}>{children}</ModalContext.Provider>
}

//custom hook to consume the modal context anywhere in our app

export const useModalContext = () => {
    return useContext(ModalContext);
}
