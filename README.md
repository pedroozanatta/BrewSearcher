# Caçador de Cervejas

Projeto da disciplina **Programação Web Fullstack**, uma SPA em React que consome uma API JSON pública de estilos de cerveja e permite buscar e filtrar por família.

## Integrantes

- Pedro Henrique Zanatta de Oliveira | RA: 2601443

## Link do Vídeo Explicativo
- **Vídeo** — https://drive.google.com/file/d/1bkGYNbvrOJ4CwSxjAJI_dGpIfslUbuM6/view?usp=sharing

## API JSON utilizada

- **BrewGravity** — https://brewgravity.com/docs/api-reference/introduction
- **Dados da API** — https://brewgravity.com/data/styles.json

Retorna uma lista com 110 estilos de cerveja contendo nome, categoria, teor alcoólico (ABV), amargor (IBU) e cor (SRM).

## Hook do React.js implementado

- **`useMemo`** — usado em `src/App.jsx` para recalcular a lista filtrada apenas quando a busca ou o filtro de categoria mudam, evitando filtrar a lista inteira a cada renderização.

## Biblioteca externa

- **Tailwind CSS** — biblioteca de estilos utilitários usada em toda a interface.

## Funcionalidades

- Busca por nome do estilo.
- Filtro por família (Todos, Lager, IPA, Trigo, Ácidas, Escuras, Outros).
- Lista de estilos com faixas de ABV, IBU e SRM.

## Estrutura

```
src/
  App.jsx              
  main.jsx             
  index.css            
  components/
    Header.jsx
    Hero.jsx
    SearchInput.jsx
    CategoryFilter.jsx
    BeerList.jsx
    BeerCard.jsx          
  services/
    beerApi.js 
  utils/
    beerFamilies.js   
    typeColor.js      
```

## Como executar

```bash
npm install
npm run dev
```

## Ferramentas de apoio

- **Vite** — bundler e servidor de desenvolvimento.
- **ESLint** — análise estática do código.
- **Chat GPT** — auxílio na estilização, prototipação, busca de APIs e documentação do código.
