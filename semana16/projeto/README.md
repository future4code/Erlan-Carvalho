# To do List

# Este é a parte do back-end da to do list, uma API, onde é possível encontrar endpoints que podem ser consumidos pelo front-end do projeto.

## <ins> Endpoint: Criar usuário (Create user ) </ins>

#### Método : POST 
#### Path: ```"/user"```
#### body de exemplo:
~~~
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}
~~~

## <ins> Endpoint: Pegar o  usuário pelo id  (get  users by id) </ins>

#### Método:  GET
##### Path: ```"/user/:id"```
#### Exemplo de path params:
~~~
id: "id do usuário"
~~~

## <ins> Endpoint: Editar usuário (to edit users ) </ins>

#### Método: PUT
#### Path: ```"/user/edit/:id"```
#### Exemplo de path params:
~~~
id: "id do usuário"
~~~
#### body de exemplo:
~~~
{
	"name": "Astro Dev",
	"nickname": "astrodev"
}
~~~