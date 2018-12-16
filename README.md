# Projeto-API

Este projeto de uma aplicação back-end que fornece API's para outra aplicação de uma Lavanderia. :)
------------------------------------------------------------------------------------------------
######
######
######  DIÁRIO DE BORDO:
##
##  Dia 1 - 15/12/2018

Hoje iniciei a aplicação, estudei um pouco como funciona os banco de dados não relacionais, e sobre o mongoosejs(mongodb), e criei uma api base, fazendo o uso do express para rotas, instalei o Insomnia e testei as rotas da api.

Rotas criadas: 
  user_list (solicitação get, retorna a lista de todos os usuários)
  user_getbyid(solicitação get, retorna as informações sobre determinado usuário)
  user_create(solicitação post), criar um novo usuário com as informações do corpo da solicitação)

Tudo funcionou corretamente.

Agora irei tentar criar novas rotas para atualizar os dados, e deletar.
    
##  Dia 2 - 16/12/2018
Hoje criei as duas novas rotas que possuía em mente no primeiro dia de desenvolvimento:
  user_update(solicitação patch, atualiza as informações do usuário)
  user_delete(solicitação delete, deleta um usuários)
  
Encontrei dois métodos para fazer a atualização das informacoes do usuário, no primeiro método, ele retorna as informacoes atualizadas, no segundo não, um problema que encontrei em ambos casos e que segundo a documentação o campo __v, responsável por registrar a versao do arquivo, deveria ser incrementado após o uso do comando save(), entretanto isto não ocorre.

Ate o momento não encontrei um jeito para sanar isto, como também não fiz o uso deste campo.

Inclui o campo phone no model User, para registrar os telefones dos usuários, e criei a rotas:
  phone_list(solicitação get, retorna os telefones de um determinado usuário)
  phone_create(solicitação get, registra o novo telefone do usuário)
  

Tentei criar a rota: phone_update, entretanto não encontrei um método para atualizar determinada posição do array com o novo dado, a rota foi criada entretanto e necessário terminar o método. rota: phone_delete também foi criada, entretanto não encontrei um método para deletar determinado elemento do array.

 * [ ] phone_update (terminar o método).
 * [ ] phone_delete (terminar o método).
 * [ ] phone_list (retorna erro caso  o array seja nulo).
 * [ ] Boas Praticas (duvidas quanto a retorno de erros e dados).
