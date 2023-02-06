# Fullstack Contact Book

<div style="display: inline_block"><br/>
    <img align="center" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white/" alt="html5" />
    <img align="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E/" alt="js" />
    <img align="center" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img align="center" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB/" alt="react" />  
    <img align="center" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white/" alt="css3" />
    <img align="center" alt="styledcomponents" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
    <img align="center" alt="react-router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
    <img align="center" alt="ts" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img align="center" alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img align="center" alt="express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
    <img align="center" alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
    <img align="center" alt="git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
    <img align="center" alt="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
</div>
<br/>
<br/>

# Executando o projeto

<br>
<br>

Antes de mais nada, realize o clone desse repositório em sua máquina local (ou local que irá executar o projeto)

## Configurando e Executando Back End ---

- Entre na pasta "backend"
- Faça uma cópia do arquivo ".enx example" e renomeie para "env".
- Preencha o arquivo .env com os dados que faltam, seguindo o exemplo abaixo :

```.env
POSTGRES_USER=usuárioDoSeuPostGres
POSTGRES_PWD=SenhaDoSeuPostGre
POSTGRES_DB=NomeDoBancoDeDaDOS
JWT_SECRET=SuaStringSecreta
```

- Instalando todas as dependências - Abrir o terminal na pasta backend e digite

```VSCode ou Shell
yarn
```

- Após instalar as dependências, vamos rodar as migrações com o seguinte comando

```VSCode ou Shell
yarn typeorm migration:run -d src/data-source.ts
```

- Para ter maiores informações em relação as rotas e o que é esperado, dentro do projeto possui um arquivo denominado "Insominia_contactBook.json" aonde basta importar dentro do seu Insomnia, que esta com as rotas todas prontas para uso.

<br />

- Rodando a aplicação - no terminal da pasta backend, digite o sequinte comando para executar a api 

```VSCode ou Shell
yarn start
```

Se tudo der certo no console aparecerá que a porta do banco de dados e a porta da api configurada no arquivo .env

<br>
<br>


## Configurando e Executando o Front End ---

-- entre na pasta do frontend, abra o terminal do VSCode ou shell e executa o seguinte comando:

```VSCode ou Shell
yarn
```

- Depois que finalizar a instalação dos pacotes, no mesmo terminal digite para executar o front end:

```VSCode ou Shell
yarn start
```

Ufa, chegamos até aqui, se a aplicação não abrir automaticamente, basta no navegador acessar "localhost:3000" e a aplicação irá aparecer no browser.

<br>
<br>

E ai, curtiu?

Seu feedback é importante para mim, caso sinta confortável, me manda um email ou me envie mensagem em alguma das minhas redes sociais para aperfeiçoar o meu código ;)

-- Higor Skowronski
