import logo from '../../assets/logo.svg'
import './style.css'

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo do projeto" />
        <h1>DSmeta</h1>
        <p>Desenvolvido por <a href="https://www.instagram.com/ryaanmx/" target="_blank">@ryaanmx</a></p>
      </header>
    </>
  )
}

export default Header