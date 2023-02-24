descricoes = {
    "Python": "É uma linguagem de programação de alto nível, orientada a objetos; onde eu à utilizo na criação de funcionalidades e desenvolvimento de API's.",
    "Django": "Django é um framework web, escrito em Python, que segue o padrão de projeto 'MTV'; tendo como principal função para mim, o desenvolvimento de API's.",
    "Docker": "Docker é uma plataforma automatiza a implantação de aplicativos dentro de contêineres de software, fornecendo uma camada adicional de abstração.",
    "Linux": "Linux é um sistema operacional de código aberto,  essencial quando o assunto são servidores, o que o torna indispensável para um desenvolvedor backend.",
    "MongoDB": "MongoDB é um software de banco de dados orientado a documentos livre (não relacional). O MongoDB usa de documentos semelhantes a JSON com esquemas.",
    "MySQL": "MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É um dos sistemas de gerenciamento de banco de dados mais populares.",
}


function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

