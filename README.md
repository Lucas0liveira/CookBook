# CookBook

CookBook é um catálogo de receitas com aspectos de rede social. A ideia é que pessoas que têm a culinária como hobbie possam colecionar e compartilhar suas próprias receitas.

## Pré-requisitos
* Última versão do Node.js instalado.
* Máquina com Windows, Linux ou MacOS.
* Navegador (como por exemplo o chrome ou o firefox).

## Execução

Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para executar o CookBook.

1. Faça a clonagem deste repositório em sua máquina.
2. No seu terminal de preferência, navegue até a pasta backend.
3. Execute os comandos abaixo:
```
npm install
npx knex migrate:latest
npm start
```
4. Abra um novo terminal e navegue até a pasta frontend.
5. Execute os comandos abaixo:
```
npm install
npm start
```

## Usando o CookBook
### Cadastro
Para realizar o cadastro no site, clique no botão "Cadastrar" localizado no canto superior direito do site.
Em seguida:
* Digite seu nome
* Digite seu e-mail
* Digite sua senha de preferência
* Clique em "Cadastrar"
### Login
Para realizar o login no site você precisará de um cadastro, caso não tenha, dê uma olhada na seção "Cadastro" deste documento, caso tenha:
* Clique no botão "Login" localizado no canto superior direito do site, ao lado do botão "Cadastrar"
* Digite seu e-mail cadastrado
* Digite sua senha cadastrada
* Clique em "Entrar"
### Acessando a página principal
Para ter acesso a página principal, basta clicar na opção "Início", localizada na parte superior do site, ou clicar na logo "CookBook" do site, localizada no canto superior esquerdo.
### Acessando seu perfil
Para navegar até o seu perfil, clique no menu localizado no canto superior direito e em seguida clique em "Perfil". Lá você encontrará informações sobre o seu perfil, suas pastas e receitas submetidas por você.
#### Criando uma pasta
* Dentro do seu perfil, clique no ícone de adicionar uma pasta (Círculo vermelho com um símbolo "+" em branco). Uma pequena janela será aberta
* Nessa nova janela aberta, digite o nome que deseja para sua nova pasta
* Clique em "Criar pasta"
#### Acessando as receitas submetidas
Para ter acesso as receitas submetidas por você, clique no botão "Receitas submetidas" localizados logo abaixo do seu nome, dentro do seu perfil.
#### Excluindo uma receita submetida
Dentro de receitas submetidas, escolha qual receita você deseja excluir e clique no símbolo de menu dessa receita (Três pontinhos vermelhos empilhados).
* Selecione a opção "Excluir".
### Encontrando uma receita
Para encontrar uma receita, você pode navegar pela página principal e visualizar algumas receitas. Entretanto, se deseja encontrar uma receita de uma categoria específica, clique na opção "Receitas" localizado no topo do site, em seguida clique na categoria de receita que deseja acessar.
### Visualizando informações sobre receita
Para visualizar informações sobre uma receita você precisa clicar no botão vermelho "Ver mais" localizados nos cards das receitas. 
#### Avaliando uma receita
Para avaliar uma receita, navegue até a receita que deseja avaliar e clique no botão vermelho "Avaliar essa receita", em seguida uma nova janela será aberta.
* Selecione a quantidade de estrelas que deseja agregar a uma receita (a avaliação é representada por símbolos de estrelas, sendo uma estrela equivalente a "Muito ruim" e cinco estrelas equivalentes a "Muito bom").
* Clique em "Enviar avaliação".
#### Comentando uma receita
Para comentar sobre uma receita, navegue até a receita que deseja comentar.
* Clique em comentar
* Digite seu comentário
* Clique em "Enviar comentário"
### Submetendo uma receita
Para submeter uma receita, clique no botão vermelho "Submeter receita", localizado no canto superior direito do site. Em seguida, preencha a página de acordo com as instruções necessárias para a realização da sua receita. Lembre-se sempre de deixá-la simples para facilitar a compreensão das outras pessoas. ;)



## Contribuidores
* [Lucas Oliveira](https://github.com/Lucas0liveira)
* [Leonardo Oliveira](https://github.com/Leozaru)
* [Lucas Avila](https://github.com/Lblaster)
* [Gabriel Borges](https://github.com/GabrielBG0)

## License
Este projeto usa a seguinte licença: [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.pt-br.html).
