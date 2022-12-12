import React from 'react'
import { Modal } from '../Modal'

import thumb from '../../assets/thumbnail.png'

export const ModalTest = () => {
    return (
        <div>
            <Modal
                name='Name'
                banner={thumb}
                thumbnail={thumb}
                link={'#'} />
        </div>
    )
}
