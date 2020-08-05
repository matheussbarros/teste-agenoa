import React from 'react'

import notebook_and_coffe from '../../images/notebook_and_coffe.png'
export const Equipe = () => {
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-md-6 text-center">
            <h2>uma equipe
              dedicada para você</h2>
            <div className="text-size-2">
              <p>
                Entendemos a importância de você poder ligar para uma pessoa para tirar as suas dúvidas e te ajudar na
                compra de seguros.</p>
              <p> Fique tranquilo que você terá uma equipe super dedicada para o seu negócio.</p>
            </div>

          </div>
        </div>
        <div className="col-12 mt-n8">
          <img src={notebook_and_coffe} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}
