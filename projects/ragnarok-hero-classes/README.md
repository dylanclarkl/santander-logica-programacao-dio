# ⚔️ Arena de Classes de Heróis — Ragnarok Edition

Uma aplicação web interativa desenvolvida como solução para o desafio **Escrevendo as classes de um Jogo** da [Digital Innovation One (DIO)](https://www.dio.me/), estilizada com uma interface inspirada na estética clássica de janelas e *Battle Log* de **Ragnarok Online**[cite: 1].

## 🎯 Sobre o Projeto

O objetivo principal do desafio é praticar orientação a objetos e fundamentos de lógica de programação criando uma classe genérica (`Hero`) que representa um herói de aventura com **nome**, **idade** e **tipo**, além de um método `attack()` que adapta a descrição do golpe conforme a classe escolhida.

Para elevar o projeto a nível de portfólio, além da lógica em JavaScript, foi construída uma interface temática com janelas translúcidas em azul-acinzentado, barras de `HP`/`SP`, sprite animado por classe e uma janela de *Battle Log* conectada via manipulação do **DOM**[cite: 1].

## ⚙️ Regras de Ataque por Classe

Ao executar o método `attack()`, a classe avalia a propriedade `type` do herói para definir a descrição do golpe:

| Classe (`type`) | Descrição no Código | Ataque Executado |
| :--- | :--- | :--- |
| **Mago** | `mago` | **usou magia** |
| **Guerreiro** | `guerreiro` | **usou espada** |
| **Monge** | `monge` | **usou artes marciais** |
| **Ninja** | `ninja` | **usou shuriken** |

### 💬 Saída Esperada

Ao processar o ataque individual ou em grupo, o sistema exibe no *Battle Log* a mensagem padrão exigida pelo desafio:

> *"o **{tipo}** atacou usando **{ataque}**"*

**Exemplos:**
* `> o mago atacou usando magia`
* `> o guerreiro atacou usando espada`

## 🧠 Conceitos Aplicados

* **Variáveis e Constantes:** armazenamento de referências do DOM, valores dos inputs e mapeamento de ícones por classe (`const`, `let`).
* **Operadores:** operadores de atribuição, comparação estrita no `switch` e concatenação/interpolação de strings com *template literals*.
* **Estruturas de Decisão:** estrutura condicional `switch / case / default` dentro do método `attack()` para determinar o ataque de cada tipo de herói.
* **Laços de Repetição:** uso de estrutura `for` no botão **Party Attack** para percorrer um array de 4 heróis distintos e disparar o ataque de todos em sequência.
* **Funções:** modularização das ações da interface (`renderBattleLog`) e eventos de formulário e clique.
* **Classes e Objetos:** definição da classe `Hero` com `constructor(name, age, type)`, método `attack()` e instanciação dinâmica de objetos com `new Hero(...)`.
* **Manipulação do DOM:** captura dos eventos `change`, `submit` e `click` para atualizar o sprite da classe e registrar mensagens no *Battle Log* sem recarregar a página[cite: 1].

## 📂 Estrutura de Pastas

```text
ragnarok-hero-classes/
├── index.html      # Estrutura semântica das janelas de personagem e Battle Log
├── style.css       # Estilização temática inspirada na UI clássica de Ragnarok Online
├── script.js       # Classe Hero, lógica de ataques, laço de grupo e manipulação do DOM
└── README.md       # Documentação do projeto