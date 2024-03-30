import React, { Fragment } from 'react'
import { Card } from './Card'
import {createPortal} from 'react-dom';
import "./modal.css"
import { useModalContext } from '../context/modal-context';

const Modal = ({className, children}) => {
  const {showModal, hideModalHandler} = useModalContext();
  return (
    <Fragment>
        {
          showModal && createPortal(
            <>
            <section id="backdrop" onClick={hideModalHandler}></section>
            <Card className={className}>
                {children}
            </Card>
            </>, 
            document.querySelector("#overlays")
          )
        }
    </Fragment>
  )
}

export default Modal