import React from 'react'
import { Card } from '../shared/Card'
import ItemsCobertura from './ItemsCobertura'

import CoberturasIcon from '../../images/imgSeguroEmpresarial.png'
export const Coberturas = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-10 text-center align-items-center">
            <h2 className="mb-5 ">Coberturas do seguro D&O<span> <img className="icon" src={CoberturasIcon}
              alt="Coberturas do seguro D&O" />
            </span></h2>
          </div>
        </div> 

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row ">
              {ItemsCobertura.map((item) => (
                <div className="col-sm-6" key={item.title}>
                  <Card title={item.title} text={item.text} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
