descricoes = {
    "Python": "É uma linguagem de programação de alto nível, orientada a objetos; onde eu à utilizo na criação de funcionalidades e desenvolvimento de API's.",
    "Django": "Django é um framework web, escrito em Python, que segue o padrão de projeto 'MTV'; tendo como principal função para mim, o desenvolvimento de API's.",
    "Docker": "Docker é uma plataforma automatiza a implantação de aplicativos dentro de contêineres de software, fornecendo uma camada adicional de abstração.",
    "GIT": "Git é um sistema de controle de versão projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.",
    "MongoDB": "MongoDB é um software de banco de dados orientado a documentos livre (não relacional). O MongoDB usa de documentos semelhantes a JSON com esquemas.",
    "MySQL": "MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É um dos sistemas de gerenciamento de banco de dados mais populares.",
}


function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

