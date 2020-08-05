import React from 'react'

import computador_com_planos from '../../images/computador_com_planos_dno.png'
export const Desmontracao = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={computador_com_planos} className="img-fluid" alt="computador com planos" />
          </div>
          <div className="col-md-6">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">abra a sua conta sem custo</h5>
                  <p className="card-text">sem custo nenhum e super rápido, mais ou
                  menos em 2 minutos.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">cote e contrate de forma simples e fácil</h5>
                  <p className="card-text">
                    faça cotações de seguro de forma simples e fácil para você e para a sua empresa e contrate
                    com poucos cliques. não haverá nenhum custo
                  adicional por contratar pela plataforma.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">compare planos</h5>
                  <p className="card-text">
                    compare cenários diferentes para tomar a
                    melhor decisão para a sua empresa e para você
                </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">conteúdo educativo</h5>
                  <p className="card-text">
                    para você entender melhor o seguro que você está comprando.
                </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
