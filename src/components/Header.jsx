import Logo from "../assets/Logo.png"

function Header() {
  return (
    <header className="border-b border-border bg-background">   
      <div className="flex w-full px-16 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img 
            src={Logo} 
            alt="Logo"
            className = "h-16"
          />    

          <span className="font-primary text-3xl text-text">
            Caçador de Cervejas
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header