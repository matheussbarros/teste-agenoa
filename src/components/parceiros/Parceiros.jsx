import React from 'react'
import ParceirosList from './ParceirosList'

import predios_new_york from '../../images/predios_new_york.png'
export const Parceiros = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>principais parceiros</h2>
            <p className="text-size-2 my-4">
              somos parceiros das principais seguradoras do país <br /> sejam elas nacionais
            ou multinacionais.
          </p>

            <div className="row partners">
              {ParceirosList.map((item) => (
                <div className="col-md-4 col-sm-3" key={item.nome}><img src={item.img} alt={item.nome} /></div>
              ))}


            </div>


          </div>
          <div className="col-md-4 d-none d-sm-none d-md-block">
            <img src={predios_new_york} className="img-fluid" alt="principais parceiros" />
          </div>
        </div>
      </div>
    </section>
  )
}
