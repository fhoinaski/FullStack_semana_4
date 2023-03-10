# Controle de Negociações
Este é um projeto simples para controle de negociações em JavaScript, que permite registrar negociações com data, quantidade e valor, e filtrar as negociações por valor.

<br>

### Link para testar aqui &#x2192; [GitPage](https://fhoinaski.github.io/FullStack_semana_4/)


## Tecnologias Utilizadas
- JavaScript
- HTML
- CSS

### Estrutura de Arquivos

---
```
├── js
│   ├── controller
│   │   └── NegociacaoController.js
│   ├── models
│   │   ├── ListaNegociacao.js
│   │   └── Negociacao.js
│   ├── views
│   │   └── NegociacoesView.js
│   └── main
│       └── programa.js
├── css
│   └── estilo.css
├── index.html
└── README.md
````
---

- **js/controller/NegociacaoController.js:** Contém a classe NegociacaoController, que controla a interação com a 
interface e faz a lógica de negócio da aplicação.

- **js/models/ListaNegociacao.js:**  Contém a classe ListaNegociacao, que representa uma lista de negociações.

- js/models/Negociacao.js: Contém a classe Negociacao, que representa uma negociação com data, quantidade e valor.

- **js/views/NegociacoesView.js:** Contém a classe NegociacoesView, que representa a view de negociações da aplicação.

- **js/main/programa.js:** Contém os metodos click tanto para o botão criar negocio quanto para criar o filtro 
  chamando os metodos filtrar, tambem coloca um limitador para os inputs de quantidade

- **css/estilo.css:** Arquivo CSS para estilização da página.

- **index.html:** Página HTML da aplicação.

## Como Executar
Abra o arquivo index.html em um navegador web. A partir daí, é possível registrar negociações e filtrar as negociações por valor.

### Funcionalidades
- #### Registrar Negociação
Para registrar uma negociação, preencha os campos de data, quantidade e valor, e clique no botão "Registrar negociação". A negociação será adicionada à lista de negociações exibida na tela.

- #### Filtrar Negociações
Para filtrar as negociações por valor, preencha o campo "Acima de" com um valor numérico e clique no botão "Filtrar". A lista de negociações será atualizada para mostrar apenas as negociações com valor acima do valor informado.