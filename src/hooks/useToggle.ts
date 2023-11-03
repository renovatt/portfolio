import { useState } from 'react'

export const useToggle = () => {
  const [modal, setModal] = useState<boolean>(false)

  const toggleModal = () => {
    setModal((state) => !state)
  }

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  return {
    modal,
    openModal,
    closeModal,
    toggleModal,
  }
}
