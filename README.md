<h1>TCC - SGO</h1>
<h2>Sistema de Gerenciamento de Obras</h2>

<h5>Estrutura até o momento dessa documentação - DIa 09/03/2021</h5>

<h3>App.js</h3>
  <p>No momento recebe o Drawer Navigator</p>
  
  
<ul><h3>Pasta src</h3></ul>

  <li><b>Drawer Navigator</b></li>
    <p>Coleção de páginas principais que serão visulizadas e algumas adicionadas no Menu</p>

                      Recebe um Drawer Content

  <li><b>Drawer Content</b></li>

    Menu personalizado, com Avatar, dados do funcionário e páginas de acesso.
      NO momento páginas Bem Vindo e CRUD de Funções.


  <li><b>1 - api</b></li>
  
  <p><b>1.1 - Role</b></p>
    
      Arquivos de acesso a api (backend em Ruby on Rails)    - preciso verificar uma forma melhor de fazer isso
                 1.1.1 - api_role - tentativa de colocar todas as chamadas no mesmo arquivo<
                 1.1.2 - delete_role_api.js - chamada para method DELETE da api.
                 1.1.3 - find_role_by_id.js -chamada para method GET da api passando o ID
                 1.1.4 - role_api.js - create roles chamada para method POST da api
                 1.1.5 - roles_api.js - chamada para method GET retornando todas as roles
                 1.1.6 - update_role_api.js - update roles chamada para method PUT da api
      
   <li><b>2 - components</b></li>
   
      2.1 - Cabeçalho - padronizar os cabeçalhos da páginas
      2.2 - Listagem - deixamos de usar por conta de passagem de parametros - vou validar posteriormente para utilizá-lo novamente
      2.3 - Pesquisar - ainda em processo de desenvolvimento - como iremos implementar
    
   <li><b>3 - routes</b></li>
   
   <p><b>2.1 - RoutesRole</b></p>
   
      Stack de Navegação das Funções - Partindo do Roles(Lista das Funções) - CreateRole - UpdateRole
      
   <li><b>4 - views</b></li>
   
     4.1 - BemVindo - tela de boas vindas do usuários - vai mostrar o nome e qual atividade o funcionário tem planejada para aquele dia
     4.2 - Inicio - primeira tela de contato do usuário com o aplicativo
     4.3 - Login
     4.4 - Role - Telas do CRUD de Funções.
     
     
