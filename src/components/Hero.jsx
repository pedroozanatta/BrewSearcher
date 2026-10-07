import SearchInput from './SearchInput'
import HeroImage from '../assets/HeroImage.png'

function Hero({ search, onSearchChange }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:px-16 md:py-20 lg:grid-cols-2 lg:gap-20">
      <div>
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          guia de cervejas
        </span>

        <h1 className="mt-4 font-title text-4xl md:text-5xl">
          Descubra sua
          <span className="block italic text-accent">próxima cerveja.</span>
        </h1>

        <p className="mt-6 text-text-secondary">
          Explore estilos, compare características e encontre uma cerveja que
          combina com você.
        </p>

        <div className="mt-8 max-w-xl">
          <SearchInput value={search} onChange={onSearchChange} />
        </div>
      </div>

      <div className="hidden items-center justify-center rounded-full bg-primary lg:flex lg:size-120">
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
