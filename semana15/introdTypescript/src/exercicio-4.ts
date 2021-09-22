// a) 
// R- rodaria o seguinte comando no termianal: tsc exercicio-4, o que transpilaria o arquivo typescript em um arquivo javascript, possibilitando-o de ser executado pelo node.

// b) 
//R- Se as configurações do json tsconfig estiverem corretas, basta que você vá no terminal e digite tsc, que automaticamente, todos arquivos typescript da pasta src serão transpilados em arquivos javascripts numa pasta chamada build.

// 
//R- c) Como dito na resposta anterior, se as configurações do json do tsconfig estiverem abilitadas para a pasta que o diretorio raiz seja o src, todos os documentos com extensão ts, serão transpilados em arquivos js.

// d)
//R- comparando os dois arquivos json, precebe-se que são arquivos personalizáveis,e com isso chegamos a conclusão que, o arquivo do início foi personalisado, para rodar a versão mais recente do javascript, es6, além de ter como rootdir(diretório raíz), a pasta src, e a outDir(dir de saída) a pasta build, ou seja, os arquivos ts, são salvos na pasta src, e suas transpilações vão para a pasta build, além de várias outras mudanças importantes para deixar o typescript bastante restritivo, permitindo que o mesmo funcione apenas, quando todas suas váriaveis estejam tipadas, ou melhor, acusando quais são seus tipos(string, number, boolean, array, {}(objects), undefined, null).