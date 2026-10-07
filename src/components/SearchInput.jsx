import SearchIcon from "../assets/SearchIcon.svg"

function SearchInput({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center rounded-xl border border-border px-4 py-2 shadow-sm"
    >
      <div className="flex flex-1 items-center gap-2">
        <img
          src={SearchIcon}
          alt="Ícone de pesquisa"
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Busque um estilo de cerveja..."
          className="w-full bg-transparent text-sm text-text outline-none placeholder:font-secondary"
        />
      </div>

      <button
        type="submit"
        className="h-10 rounded-lg bg-accent px-6 text-base font-light text-white transition-opacity hover:opacity-90"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchInput