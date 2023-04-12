<h1 align="center">Phanox</h1>

O website ecommerce "Phanox " foi desenvolvido para comercializar produtos eletrônicos, como fones de ouvido, caixas de som, celulares e acessórios. Para o desenvolvimento, foi utilizado o framework Next.js, que oferece recursos como server-side rendering e geração de páginas estáticas, permitindo a construção de aplicações web escaláveis e de alto desempenho. A estilização do site foi feita com o framework CSS Tailwind, que oferece uma abordagem utilitária para estilos, agilizando e tornando mais eficiente o processo de desenvolvimento. Além disso, o site utiliza outras tecnologias como o CMS Sanity, que é uma plataforma de gerenciamento de conteúdo (CMS) que permite criar, editar e publicar conteúdo com facilidade, e o Stripe, que processa pagamentos seguros e confiáveis.

🔗: <a href="https://phanox-ecommerce-nine.vercel.app">https://phanox-ecommerce-nine.vercel.app</a>

## 💻Tecnologias:

- Next.Js

- React

- Tailwind CSS

- Sanity.io

- Typescript

- Node.js

- Vercel

## 🛠️Instalação:

Para instalar as dependências, execute o seguinte comando:

```
npm install || yarn install || pnpm install
```

## 🧑‍💻Uso:

Para iniciar o projeto, execute o seguinte comando:

```
npm start || yarn start || pnpm dev
```

Isso iniciará o projeto em`http://localhost:3000`.

## 🗃️Estrutura dos arquivos:

```

phanox-ecommerce/
├── .next/
│    └── ...
├── .vscode/
│	└── ...
├── .public/
│	└── ...]
├── .sanity_phanox_ecommerce/
│	└── ...
└── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── checkout_sessions/
│   │   │   │	├── route.ts
│   │   │   ├── checkout_sessions/
│   │   │   └── ...
│   │   ├── product/
│   │   │   ├── [slug]/
│   │   │   │	├── loading.tsx
│   │   │   │	├── page.tsx
│   │   ├── success/
│   │   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── Footer.tsx
│   │   ├── FooterBanner.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── index.ts
│   │   ├── Layout.tsx
│   │   ├── NavBar.tsx
│   │   ├── Product.tsx
│   │   ├── Skeleton.tsx
│   ├── context/
│   │   ├── StateContext.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   ├── client.ts
│   │   ├── getStripe.ts
│   │   ├── queries.ts
│   ├── models/
│   │   ├── models.ts
│   ├── styles/
│   │   ├── global.css
│   ├── utils/
│   │   ├── apiHelper.ts
│   │   ├── confetti.ts
│   │   ├── currencyFormat.ts
│	└──
├──.env
├──.eslintrc.json
├──.gitignore
├──.prettierrc
├──next-env.d.ts
├──next.config.js
├──package-lock.json
├──package.json
├──pnpm-lock.yaml
├──postcss.config.js
├──README.md
├──tailwind.config.js
├──tsconfig.json
```

## 🔑Descrição de alguns diretórios importantes:

- `.next/`: Onde contém todos os recursos compilados e otimizados, como as páginas HTML, pacotes JavaScript, imagens e outros arquivos estáticos necessários para executar o aplicativo no modo de produção.
- `src/`: Diretório usado para armazenar o código-fonte. Contém todos os arquivos Typescript, componentes React e outros recursos usados para criar a interface do usuário e implementar a lógica de negócios do aplicativo.
- `src/app/`: Novo diretório introduzido para fornecer um local centralizado para configurar e inicializar o aplicativo. Responsável por configurar o layout e os estilos globais do aplicativo, manipular a renderização do lado do cliente e fornecer outras opções de personalização.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/context/`: Onde contém o contexto usado para gerenciar o estado da aplicação.
- `src/lib/`: Onde contém a definição de interfaces TypeScript para as props de diferentes componentes usados na estrutura Next.js.
- `src/models`: Contém arquivos estáticos como imagens, fontes etc.
- `src/styles`: Arquivos CSS e relacionados ao estilo do projeto.
- `src/utils`: Funções utilitárias usadas em todo o aplicativo.

## 🧰Detalhes e funções de alguns arquivos:

- `src/componentes/Cart.tsx`: Componente usado para renderizar o carrinho de compras de um usuário. Ele é composto de diversos elementos e funcionalidades, o componente renderiza um contêiner de fundo opaco fixo no canto superior direito da tela com um botão "Voltar" e várias informações sobre o carrinho de compras, incluindo o número de itens, preços e imagens. Se o carrinho estiver vazio, exibe uma mensagem com um ícone de carrinho de compras e um botão "Continue comprando". Se houver itens no carrinho, ele renderiza cada um deles com informações como nome, preço, imagem, quantidade e um botão para remover o item do carrinho. O componente também inclui uma função `handleCheckout` que é chamada quando o usuário clica no botão "Finalizar compra". Essa função usa a API do Stripe para criar uma sessão de checkout com as informações do carrinho e redireciona o usuário para o processo de pagamento do Stripe.

- `src/components/HeroBanner.tsx`: Componente que exibe um banner com imagem, texto e botão. A seguir, temos uma breve explicação das principais partes do código: `Importações`: o componente faz uso de algumas importações, como a interface BannerData, que define o formato esperado para os dados que serão exibidos no banner, a função urlFor, que é usada para gerar a URL da imagem do banner, a biblioteca Link, que é usada para criar links internos na aplicação, e o componente Image, do Next.js, que é usado para exibir a imagem do banner. `Interface HeroBannerProps`: essa interface define o formato esperado para as propriedades que serão passadas ao componente. Nesse caso, espera-se uma propriedade heroBanner, que deve ser do tipo BannerData.

- `src/componentes/FooterBanner.tsx`: Exporta um componente React chamado FooterBanner que exibe um banner promocional no rodapé de um site. O banner é composto por vários elementos, incluindo texto, uma imagem e um botão para acessar um produto. O componente recebe um prop chamado footerBanner do tipo BannerData. Este prop contém todas as informações necessárias para preencher o banner.

- `src/componentes/Layout.tsx`: Componente que fornece a estrutura básica para todas as páginas do site, incluindo o cabeçalho, o conteúdo principal e o rodapé.
- `src/componentes/Navbar.tsx`:Esse componente renderiza o Menu de navegação do aplicativo web ecommerce.

- `src/componentes/Product.tsx`:Esse componente renderiza a imagem, o nome e o preço de um produto, agrupados em um link para a página de detalhes do produto. A imagem é renderizada usando o componente Image do Next.js, que é otimizado para desempenho e usa a primeira imagem do produto de uma matriz de imagens como fonte.

- `src/context/StateContext.tsx`: contexto usado para gerenciar o estado de um carrinho de compras do aplicativo de comércio eletrônico. O contexto armazena os seguintes dados de estado: `showCart`: uma flag booleana indicando se o carrinho deve ser exibido ou não.
  `cartItems`: uma matriz de objetos ProductData representando os itens no carrinho.
  `totalQuantities`: o número total de itens no carrinho.
  `totalPrice`: o preço total de todos os itens no carrinho.
  `qty`: um número que indica a quantidade de itens a serem adicionados ao carrinho.
  O contexto fornece as seguintes funções para manipular o estado:

  `setShowCart`: uma função para definir o sinalizador showCart.
  `setCartItems`: uma função para definir o array cartItems.
  `setTotalQuantities`: uma função para definir o quantitativo total de compras.
  `setTotalPrice`: uma função para definir o valor total dos produtos adicionados ao carrinho.
  `incQty`: uma função para incrementar o valor da quantidade.
  `decQty`: uma função para decrementar o valor da quantidade.
  `onAdd`: uma função para adicionar um item ao carrinho.
  `onRemove`: uma função para remover um item do carrinho.
  `toggleCartItemQuantity`: função para alternar a quantidade de um item no carrinho.

- `src/lib/api.ts`: Este módulo exporta três funções que podem ser usadas para fazer chamadas de API usando um cliente GraphQL.

  `getProducts()` - Função que retorna uma lista de objetos `ProductData` através da execução da consulta GraphQL `queries.productsQuery` usando o cliente GraphQL `client`.

  `getBanner()` - Função que retorna uma lista de objetos `BannerData` através da execução da consulta GraphQL `queries.bannerQuery` usando o cliente GraphQL `client`.

  `getProductBySlug(slug: string)` - Função que retorna um único objeto `ProductData` através da execução da consulta GraphQL `slugProductQuery(slug)` usando o cliente GraphQL `client`. O parâmetro `slug` deve ser uma string que representa o slug do produto que deseja buscar.

- `src/lib/client.ts`: Este módulo é responsável por gerenciar a conexão com o serviço do Sanity.io e construir URLs de imagem a partir de suas referências.

  O `client` é uma instância de `SanityClient` que fornece acesso à API do Sanity.io e configurações relacionadas, como `projectId`, `dataset`, `apiVersion`, `token` e `useCdn`. Ele é construído usando as informações do ambiente do `process.env` e as consultas do módulo `queries`.

  O `urlFor` é uma função que constrói uma URL de imagem a partir de uma referência de imagem do Sanity.io. Ele utiliza o `imageUrlBuilder` do `@sanity/image-url` e as informações do ambiente do `process.env` para criar a URL.

  O `builder` é uma instância de `imageUrlBuilder` que é responsável por construir URLs de imagem do Sanity.io a partir de referências de imagem. Ele utiliza as informações do ambiente do `process.env` para configurar as credenciais do Sanity.io.

- `src/lib/getstripe`: Este é um arquivo TypeScript que exporta uma função `getStripe` que retorna uma Promise para um objeto Stripe. Ele utiliza a biblioteca `@stripe/stripe-js` para carregar e retornar o objeto Stripe. A função `getStripe` é definida sem parâmetros e verifica se a `stripePromise` já foi definida ou não. Se ainda não foi definida, a função chama a função `loadStripe` da biblioteca `@stripe/stripe-js` passando a chave pública do Stripe como parâmetro. A função `loadStripe` retorna uma Promise que resolve para um objeto Stripe. Quando a Promise é resolvida, o objeto Stripe é armazenado na variável `stripePromise` e a Promise é retornada. Se a `stripePromise` já foi definida, a função simplesmente retorna a Promise armazenada anteriormente, sem chamar novamente a função `loadStripe`.

- `src/lib/queries.ts`: Este é um módulo que exporta três consultas do Next.js para o Sanity Studio. As consultas são definidas usando a linguagem GROQ e a função `groq` do pacote `next-sanity`.

  A primeira consulta, `slugProductQuery`, é uma consulta dinâmica que recebe uma string `slug` como parâmetro. A consulta seleciona um único produto do tipo "product" com um campo de slug que corresponde ao `slug` fornecido.

  A segunda consulta, `productsQuery`, seleciona todos os produtos do tipo "product".

  A terceira consulta, `bannerQuery`, seleciona todos os banners do tipo "banner".

  Essas consultas podem ser usadas com a instância do cliente Sanity para recuperar dados do Sanity Studio.

- `src/utils/apiHelper.ts`: exporta uma função usada para fazer uma requisição POST para um determinado URL com um objeto JavaScript no corpo da requisição, que é convertido em formato JSON, usando a sintaxe async/await para lidar com a requisição assíncrona e retorna uma Promise que resolve em um objeto JSON com a resposta da requisição.

- `src/utils/confetti.ts`: Exporta uma função `runFireWorks` que utiliza a biblioteca `canvas-confetti` para criar uma animação de fogos de artifício na tela do usuário por um determinado tempo. A função inicia definindo a duração da animação em 5 segundos e o horário de término, além de alguns parâmetros padrão para a chuva de confete.

- `src/utils/currencyFormat.ts`: Essa função recebe um número e retorna uma string formatada como uma representação monetária no formato da moeda brasileira (Real - BRL).
