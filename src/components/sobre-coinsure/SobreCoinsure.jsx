import React from 'react'

import logo from '../../images/new_logo_coinsure.png'
import pessoas_no_computador from '../../images/pessoas_no_computador.png'

export const SobreCoinsure = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={logo} width="293" alt="" className="img-fluid" />

            <h4 className="my-4">queremos a melhor
            experiência no
            mercado de seguros</h4>
            <div className="text-size-2">
              <p>A <b><span>CO</span><span>INSURE</span></b> é uma plataforma criada pela Genoa
              Seguros que quer mudar a experiência do cliente na
              compra de seguros. Através dos anos, vimos a necessidade
              de modenizar esse mercado, oferecendo uma experiência
              melhor para o cliente.</p>
            </div>


            <h2>
              educativa <br />
                  &<br />
                    simples<br />
                      &<br />
                        humana
          </h2>
          </div>
          <div className="col-md-6 d-none d-sm-none d-md-block">
            <img src={pessoas_no_computador} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
