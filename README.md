<img alt="Genial" title="Genial" src="assets/logo.svg" width="300px" />

<h3 align="center">
  Teste para a Genial investimentos utilizando ReactJS
</h3>

<p>Repostório dedicado para realizar o teste proposto pela Genial Investimentos, utilizando o ReactJS, junto com bibliotecas gráficas, como Nivo.</p>

<blockquote align="center">“Programs must be written for people to read, and only incidentally for machines to execute.” ― Harold Abelson</blockquote>

<p align="center">
  <a href="#sobre-o-test">Sobre o teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionamento">Funcionamento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tests">Testes</a>
</p>

## Sobre o teste

Esse é o teste proposto pela [GenialInvestimentos](https://www.genialinvestimentos.com.br/), com o intuito de analisar
e contratar um desenvolvedor frontend, feito em parceria com a [Sciensa](http://www.sciensa.com/)

O teste consistia no desenvolvimento de uma página do site, mais especificamente da carteira, onde dois gráficos são
mostrados, permitindo a interação do usuário.

<h1 align="center">
  <img alt="GoStack" title="GoStack" src="githubAssets/test.png" width="700px" />
</h1>

### **Tecnologias utilizadas para o teste**

- :blue_heart: **[ReactJS](https://pt-br.reactjs.org/)** — Biblioteca JavaScript para desenvolvimento de interfaces de páginas web;
- :green_heart: **[Nivo](https://nivo.rocks/)** — Biblioteca para montagem e manipulação de gráficos;
- :purple_heart: **[StyledComponents](https://styled-components.com/)** — Biblioteca JavaScript para a estilização de componentes;
- :yellow_heart: Prettier, ESlint e EditorConfig - Tecnologias para padronização de código.

### **Tecnologia utilizada para o deploy**
- :red_heart: **[Firebase](https://firebase.google.com/?hl=pt)** — Tecnologia de deploy utilizando devOps.

## Funcionamento

<h1 align="center">
  <img alt="funcionamento" title="funcionamento" src="githubAssets/genial.gif" width="300px" />
</h1>

Como se pode perceber no gif acima, a página está interagível, permitindo o usuário mostrar quais linhas do gráfico ele deseja
que sejam mostradas, tão quanto visualizar a porcentagem nos gráficos também. Essa funcionalidade foi desenvolvida utilizando
a biblioteca [Nivo](https://nivo.rocks/), permitindo a utilização de um arquivo _JSON_ como fonte de dados, tão quanto a sua
modificação em tempo real.

Além disso, alguns dados estão interligados, como, por exemplo, os dados do gráfico redondo estão interligados com os dados
das caixas na área de rentabilidade por categoria. 

Outro dado que é interessante citar é o nome de usuário. Caso o testador deseje mudar o nome, é só ir no componente **TopMenu**
e mudar a propriedade name do objeto que está sendo passado para o componente **UserInfo**.

Outro ponto importante para se tocar é a utilização de padronização de código nesse projeto. Para isso, foram utilizados o 
ESlint para padronização geral, Prettier para padronização estilística e EditorConfig para padronização entre sistemas operacionais.

## Testes

Esse teste foi hospedado utilizando o [Firebase](https://firebase.google.com/?hl=pt). Portanto, para acessar o teste, entre 
[neste](https://teste-react-genial.web.app/) link. Ao entrar, será possível interagir com a aplicação como um todo. Para análise
de código, este repositório foi criado utilizando a arquitetura de componentização. Sobre a arquitetura de pastas:

 * *assets* - Pasta dedicada à imagens e ícones da aplicação
 * *components* - Componentes reutilizáveis da aplicação
  * *Pasta do componente* - Cada componente possui uma pasta com um arquivo *index.js*, ou seja, seu core, e um arquivo *style.js*, ou seja, sua estilização.
 * *styles* - Definição de estilos globais e do *theme*, seguindo o [StyleGuide](https://www.figma.com/file/ElHqmAtigycrSuAJokjDgdaY/Aplicativo---Telas-e-Fluxos?node-id=0%3A1) da Genial investimentos.
 * *utils* - Funções puras que recebem um valor e retornam outro valor respectivo.
 * *views* - Como esse teste só tinha uma página, não faria sentido criar uma pasta *pages*. Por isso, criei a pasta *views* e separei a
 view da carteira em componentes separados.

 Os principais componentes desse projeto são os gráficos, os quais estão em *views/Carteira/ContainerView/FirstGridView/LineGraph | PieGraph*. Cada um deles recebe um arquivo *data.js*, onde são definidos, de acordo com a documentação do [Nivo](https://nivo.rocks/), os dados
 necessários para a geração de cada gráfico. Se for do desejo do testador mudar esses dados, siga o seguinte tutorial:

 1. Clone este repositório utilizando o comando <code>git clone https://piola@bitbucket.org/piola/teste-react-genial.git</code>
 2. Entre na pasta clonada e, depois, na pasta *frontend*
 3. Rode o comando <code>yarn</code> no terminal, para a instalação das dependências
 4. Rode o comando <code>yarn start</code> no terminal, uma janela do chrome com o projeto abrirá
 5. Altere os arquivos *data.js*, presentes nas pastas *views/Carteira/ContainerView/FirstGridView/LineGraph | PieGraph*

---

This test was made by Genial and Sciensa. Repository by Luccas Piola. ♥ for JavaScript.