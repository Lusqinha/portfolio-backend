descricoes = {
    "Python": "Uma linguagem de alto nível com sintaxe simples e direta sendo utilizadas em diversas áreas, uma escolha excelente quando o foco é webscrapping e análise de dados.",
    "Java": "Uma das linguagens de programação mais utilizadas no mundo, que tenho um apreço especial, à utilizo principalmente no desenvolvimento de aplicações desktop e web.",
    "Go": "Go é uma linguagem de programação de código aberto que facilita a criação de software simples, confiável e eficiente, sendo uma excelente escolha para o desenvolvimento de aplicações de alta performance.",
    "Linux": "Linux é um sistema operacional de código aberto, essencial quando o assunto são servidores, o que o torna indispensável para um desenvolvedor completo.",
    "Git": "Git é um sistema de controle de versões distribuído, utilizado para o versionamento de código, o que a torna essencial para um processo de desenvolvimento organizado e eficiente.",
    "Bash": "Bash é uma linguagem de script utilizada em sistemas operacionais Unix, sendo uma ferramenta essencial para a automação de tarefas e administração de sistemas."
}


function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

