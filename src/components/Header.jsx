import Logo from '../assets/Logo.png'

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="flex items-center justify-center gap-3 px-6 py-4">
        <img src={Logo} alt="" className="h-12" />
        <span className="font-title font-semibold text-2xl">Caçador de Cervejas</span>
      </div>
    </header>
  )
}