import SearchIcon from '../assets/SearchIcon.svg'

function SearchInput({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 shadow-sm">
      <img src={SearchIcon} alt="" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Busque um estilo de cerveja..."
        className="w-full text-sm outline-none"
      />
    </label>
  )
}

export default SearchInput
