// a)

type post = 

  {
      autor:string,
      texto:string
  }
    
;
type postsArray = post[]

const posts :postsArray = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// b)
//R- As entradas são os parâmetros que serão as propriedades dos elementos dos objetos do array da variável posts. E as suas saídas será o nome do autor da postagem que se encontra nos objetos do array post.

function buscarPostsPorAutor(posts:post[], autorInformado: string): post[]{
    return posts.filter(
      (post):boolean => { return post.autor === autorInformado}
    )
  }
