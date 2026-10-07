import Logo from "../assets/Logo.png"

function Header() {
  return (
    <header className="border-b border-border bg-background">   
      <div className="flex w-full px-20 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img 
            src={Logo} 
            alt="Logo"
            className = "h-12"
          />    

          <span className="font-primary text-2xl text-text">
            Caçador de Cervejas
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header