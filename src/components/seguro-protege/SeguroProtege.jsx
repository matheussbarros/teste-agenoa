import React from 'react'
import business_man from '../../images/business_man.png'
export const SeguroProtege = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6"><img src={business_man} alt="quem o seguro D&O protege" className="img-fluid" />
          </div>
            <div className="col-md-6">
              <h2 className="big-title">quem o seguro D&O protege?</h2>
              <p className="text-justify">Apesar de quem contratar o seguro ser a empresa, o seguro ampara as pessoas físicas que são responsáveis
              pela decisão do negócio. Cada seguradora possui a sua própria definição de segurado, mas em linhas gerais,
              podemos dizer que diretores estatutarios, conselheiros, administradores são pessoas que podem estar
              amparadas dentro do seguro.</p>
            </div>
          </div>
        </div>
    </section>
  )
}
