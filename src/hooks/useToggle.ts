import React from 'react'

export const useToggle = () => {
  const [modal, setModal] = React.useState<boolean>(false)

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
