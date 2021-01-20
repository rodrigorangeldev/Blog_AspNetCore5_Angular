# Blog com Aspnet Core 5 e Angular
Projeto simples de blog desenvolvido com Aspnet Core 5 e Angular, baseado no artigo (https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1). No projeto original, foi utilizado o SDK do Aspnet Core 2.2, porém, foi feito o porte tranquilamente para a versão 5.

![a001](https://github.com/rodrigorangeldev/Blog_AspNetCore5_Angular/blob/main/gif0001.gif?raw=true)
![b001](https://github.com/rodrigorangeldev/Blog_AspNetCore5_Angular/blob/main/gif0002.gif?raw=true)
![001](https://github.com/rodrigorangeldev/Blog_AspNetCore5_Angular/blob/main/001.png?raw=true)
![002](https://github.com/rodrigorangeldev/Blog_AspNetCore5_Angular/blob/main/002.png?raw=true)
![003](https://github.com/rodrigorangeldev/Blog_AspNetCore5_Angular/blob/main/003.png?raw=true)

## :floppy_disk: Tecnologias utilizadas
### Backend:
* API com Aspnet Core
* Entity Framework

### Frontend :
* Angular 11

## :pill: Pré-requisitos
* .NET Core 5.0
* Visual Studio 2019

Para criar o frontend com angular:

* [VS Code](https://code.visualstudio.com/)(Opcional)

* [Node.js](https://nodejs.org/en/)

* [Angular CLI](https://cli.angular.io/)

## :scroll: Instruções: 

* Se você clonou este repositório, precisará criar a base de dados com o Entity Framework.

No Visual Studio 2019:

1. Remova todo o conteudo da pasta Migrations.
2. Abra o Package Manager Console (Tools->Nuget Package Manager->Package Manager Console).
3. Digite os seguintes comandos:

```
Add-Migration Initial
Update-Database
```
* Para o Frontend com Angular:

Abra o diretório FrontendAngular com algum terminal e digite os seguintes comandos: 

```
npm install
ng serve
```


