import React from 'react'


import iconAlvo from '../../images/alvo-roxo.png'

export const Objetivo = () => {
  return (
    <section>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-7 text-center">
          <h2>objetivo do seguro <span> <img className="icon" src={iconAlvo} alt="objetivo do seguro" />
            </span></h2>

          <p> Amparar os executivos das empresas se eles forem responsabilizados individualmente, de maneira solidária
            ou subsidiária por causar prejuízos a terceiros ou quando infrigirem leis ou normas regulatórias.
          </p>

          <a className="btn cta-btn my-3" href="/">cotações instântaneas</a>
        </div>
      </div>
    </div>
  </section>
  )
}
