# Cookenu API 

## URL BASE 
``` https://cookenu-project.herokuapp.com ```

## Endpoints
 

### <ins> Endpoint: Cadastrar usuário (do the user signup) </ins>

#### Método : POST 
#### Path: ```"/signup"```
#### body de exemplo:
~~~
{
	"userName": "Alice",
	"email": "alice@lbn.com"
	"userPaassword": "123456"
}
~~~


### <ins> Endpoint: Fazer login do  usuário (Do the user login) </ins>

#### Método : POST
#### Path: ```"/login"```
#### body de exemplo:
~~~
{
	"email": "alice@lbn.com",
	"userPaassword": "123456"
}
~~~


### <ins> Endpoint: Pegar o próprio perfil  (get itself profile ) </ins>

#### Método: - GET
#### Path: ```"/user/profile"```
#### Headers de exemplo:  
~~~
Authorization: "token de autenticação"
~~~


### <ins> Endpoint: Pegar o  perfil  de outros usuários (get others users profile) </ins>

#### Método: - GET
#### Path: ```"/user/:id"```
#### Exemplo de path params:
~~~
id: "id do usuário"
~~~
#### Headers de exemplo:  
~~~
Authorization: "token de autenticação"
~~~


### <ins> Endpoint: Criar receita (create recipe) </ins>

#### Método : POST 
#### Path: ```"/recipe"```
#### body de exemplo:
~~~
{
        "recipeTitle": "título da receita",
	"description_prepareMode": "descrição da receita"
}
~~~


### <ins> Endpoint: Pegar receitas (get recipes) </ins>

#### Método: - GET
#### Path: ```"/recipe/:id"```
#### Exemplo de path params:
~~~
id: "id da receita"
~~~
#### Headers de exemplo:  
~~~
Authorization: "token de autenticação"
~~~
