import { useState } from 'react'
import { Modal } from './components/Modal'

function App() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <button onClick={() => setModal(true)}>
        open Modal
      </button>

      <Modal openModal ={modal} closeModal ={() => setModal(false)}>
        Modal Content
      </Modal>
    </>
  )
}

export default App
