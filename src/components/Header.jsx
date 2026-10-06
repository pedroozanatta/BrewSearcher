import Logo  from "../assets/Caçador de Cerveja.png"

function Header() {
  return (
    <header className="border-b border-[#E6DED1] bg-[#FFFDF8]">
      <div className="flex w-full px-16 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img 
            src={Logo} 
            alt="Logo"
            className = "w-20 h-20 object-cover"
          />    

          <span className="font-primary text-3xl text-neutral-black">
            Caçador de Cervejas
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header