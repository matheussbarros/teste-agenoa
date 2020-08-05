import React from 'react'


import logo from '../../images/new_logo_coinsure.png'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg  navbar-light pt-4">
          <a className="navbar-brand" href="/">
            <img src={logo} width="188" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="/">home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
