import React from 'react'
import { useInView } from 'react-intersection-observer'
import './Box.scss'

const Box = ({ content }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div className={`box ${inView && 'box__show'}`} ref={ref}>
      <h2>{content}</h2>
    </div>
  )
}

export default Box
