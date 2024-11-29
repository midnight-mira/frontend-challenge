import React from 'react'
import '../App.css'
import { useEffect, useRef } from 'react'

export const Modal = ({ openModal, closeModal, children }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (openModal) {
      dialogRef.current?.showModal()
    }
    else {
      dialogRef.current?.close();
    }
  }, [openModal])

  const close = (e) => {
    if (dialogRef.current === e.target ) {
      e.preventDefault()
      closeModal()
    }
  }
  return (
    <div>
      <dialog ref={dialogRef} onClick={close}>
        <button onClick={closeModal}
        >
          Close
        </button>
        {children}
      </dialog>
    </div>
  )
}
