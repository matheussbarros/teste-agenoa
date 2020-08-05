import React from 'react'
import logo_agenoa from '../../images/logo_genoa_com_vela.png'
export const SobreAgenoa = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="row bg-grey">
              <div className="col-md-8">
                <h2>confiança e <br />
                  credibilidade</h2>
                <p className="text-size-2">
                  Estamos desde 1992 no mercado de seguros ajudando pessoas e empresas a tomarem a melhor decisão para
                  os
                  seus negócios e patrimônio. Um dos pilares de sucesso foi cultivar o relacionamento com os nossos
                  clientes
                  e nossos parceiros. Com essa plataforma, queremos elevar o nível de atendimento para você e ajudar
                  na
                  modernização do mercado de seguros no Brasil.
                </p>
                <a className="btn cta-btn my-3" href="/">ver site</a>
              </div>
              <div className="col-md-4 ">
                <img className="mt-5 ml-md-4 logo-agenoa" src={logo_agenoa}  alt="logo agenoa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
