import React from 'react'

import powered_aws from '../../images/powered-aws.png'

export const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="row py-4">
        <div className="col-md-12 "><span className="logo-footer">COINSURE</span> </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h6>INFORMAÇÕES DE CONTATO</h6>
          <div className="contact-info">
            (11) 4780-9763 OU <br/>
            (11) 2308-9682
          </div>
          <div className="contact-info">
            RUA ÁLVARO RODRIGUES, nº 182 <br/>
            CONJ. 91.
            BROOKLIN PAULISTA
            <br/>
            CEP 04582-000
            <br/> SÃO PAULO - SP - BRAZIL
          </div>
          <div className="contact-info">
            GENOA CORRETORA DE SEGUROS LTDA.
            CNPJ: 11.410.952/0001-08
          </div>

        </div>
        <div className="col-md-2">
          <h6>SEGUROS FINANCEIROS</h6>
          <ul className="list-footer">
            <li>D&O</li>
            <li>E&O</li>
            <li>E&O</li>
            <li>GARANTIAS</li>
            <li>CRÉDITO</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h6>BENEFÍCIOS</h6>
          <ul className="list-footer">
            <li>SEGURO SAÚDE</li>
            <li>SEGURO DE VIDA</li>
            <li>SEGURO ODONTOLÓGICO</li>
            <li>PREVIDÊNCIA</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h6>PATRIMONIAIS</h6>
          <ul className="list-footer">
            <li>FROTA</li>
            <li>RISCOS DIVERSOS</li>
            <li>TRANSPORTES</li>
            <li>AGRÍCOLAS</li>
            <li>RISCOS DE ENGENHARIA</li>
            <li>FIANÇAS LOCATÍCIAS</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h6>LINHAS PESSOAIS</h6>
          <ul className="list-footer">
            <li>AUTOMÓVEL</li>
            <li>VIAGEM</li>
            <li>RESIDENCIAL</li>
            <li>CONSÓRCIO</li>
            <li>EQUIPAMENTOS PORTÁTEIS</li>
          </ul>
        </div>
        <div className="col-md-1">
          <img src={powered_aws} width="100" alt="logo aws"/>
        </div>
      </div>
    </div>
  </footer>
  )
}
