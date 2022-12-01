import React from 'react'

import '../../assets/styles/components/Message.scss';

const Message = ({text}) => {
  return (
    <div><h2 className='message' >{text}</h2></div>
  )
}

export default Message;