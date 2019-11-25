import React from 'react'
import styled from 'styled-components'
import {COMMON} from './constants'
import {modalStyles} from './SelectMenuStyles'
import theme from './theme'

const ModalWrapper = styled.div`
  ${modalStyles}
  ${COMMON}
`

const SelectMenuModal = ({children, ...rest}) => {
  return (
    <div className="details-menu" role="menu">
      <ModalWrapper {...rest}>{children}</ModalWrapper>
    </div> // does this need to wrap the modal wrapper?
  )
}

SelectMenuModal.defaultProps = {
  theme
}

export default SelectMenuModal