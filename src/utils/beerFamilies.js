export const BEER_FAMILIES = [
  { id: 'all', label: 'Todos', keywords: [] },
  { id: 'lager', label: 'Lager', keywords: ['lager', 'pilsner', 'standard american'] },
  { id: 'ipa', label: 'IPA', keywords: ['ipa'] },
  { id: 'wheat', label: 'Trigo', keywords: ['wheat'] },
  { id: 'sour', label: 'Ácidas', keywords: ['sour', 'wild'] },
  { id: 'dark', label: 'Escuras', keywords: ['porter', 'stout', 'dark'] },
  { id: 'other', label: 'Outros', keywords: [] },
]

function categoryMatches(category, keywords) {
  const name = category.toLowerCase()
  return keywords.some((keyword) => name.includes(keyword))
}

export function matchesFamily(category, familyId) {
  if (familyId === 'all') {
    return true
  }

  if (familyId === 'other') {
    return BEER_FAMILIES.every(
      (family) => !categoryMatches(category, family.keywords),
    )
  }

  const family = BEER_FAMILIES.find((item) => item.id === familyId)
  
  return categoryMatches(category, family.keywords)
}
