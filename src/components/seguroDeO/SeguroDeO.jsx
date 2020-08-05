import React from 'react'


import imageSeguro from '../../images/diretores_reuniao.svg'
export const SeguroDeO = () => {
  return (
    <section>
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 col-sm-8">
          <div className="text-center">
            <h1>seguro D&O</h1>
            <h3>para administradores e diretores</h3>
            <p>abra a sua conta e tenha acesso a cotações em minutos
              e não se preocupe, iremos te dar uma assessoria super completa</p>
          </div>

          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome completo" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="e-mail"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="telefone"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome da empresa"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="senha de acesso"/>
            </div>
            <button type="submit" className="btn btn-form btn-block">cotações instântaneas</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <img src={imageSeguro} className="img-fluid" alt="seguro D&O" />
        </div>
      </div>
    </div>
  </section>
  )
}
