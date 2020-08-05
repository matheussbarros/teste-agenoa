import React from 'react'

export const Card = ({title,text}) => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
  )
}
