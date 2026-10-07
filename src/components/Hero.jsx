import SearchInput from './SearchInput'
import HeroImage from '../assets/HeroImage.png'

function Hero({ search, onSearchChange, onSearchSubmit }) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-20 px-16 py-20">
      <div className="flex flex-col">
        <span className="mb-4 font-secondary text-sm font-medium uppercase tracking-widest text-accent">
          guia de cervejas
        </span>

        <h1 className="font-primary text-5xl text-text">Descubra sua</h1>
        <h1 className="font-primary text-5xl text-accent italic">próxima cerveja.</h1>

        <p className="mt-6 font-secondary text-base text-text-secondary">
          Explore estilos, compare características e encontre
          uma cerveja que combina com você.
        </p>

        <div className="mt-8 max-w-xl">
          <SearchInput
            value={search}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
          />
        </div>
      </div>

      <div className="flex h-120 w-120 items-center justify-center rounded-full bg-primary">
        <img
          src={HeroImage}
          alt="Caneca de cerveja ilustrada"
          className="h-120"
        />
      </div>
    </section>
  )
}

export default Hero