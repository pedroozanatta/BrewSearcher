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

- **Tailwind CSS** (`tailwindcss`) — biblioteca de estilos utilitários usada em toda a interface.

## Funcionalidades

- Busca por nome do estilo.
- Filtro por família (Todos, Lager, IPA, Trigo, Ácidas, Escuras, Outros).
- Lista de estilos com faixas de ABV, IBU e SRM.

## Estrutura

```
src/
  App.jsx              Estado da aplicação e composição da tela
  main.jsx             Entrada do React
  index.css            Tema e configuração do Tailwind
  components/          Header, Hero, SearchInput, CategoryFilter, BeerList, BeerCard
  services/beerApi.js  Chamada à API via fetch
  utils/
    beerFamilies.js    Famílias de cerveja e função de filtro
    typeColor.js       Faixas de SRM mapeadas para cores do tema
```

## Como executar

```bash
npm install
npm run dev
```

Scripts disponíveis:

- `npm run dev` — ambiente de desenvolvimento com Vite.
- `npm run build` — build de produção na pasta `dist/`.
- `npm run preview` — serve o build de produção localmente.
- `npm run lint` — roda o ESLint.

## Ferramentas de apoio

- **Vite** — bundler e servidor de desenvolvimento.
- **ESLint** — análise estática do código.
- **Chat GPT** — auxílio na estilização, prototipação, busca de APIs e documentação do código.
