# 🛡️ Sistema Classificador de Nível de Herói | DIO

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge&logo=git" alt="Status Concluído">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 📌 Sobre o Projeto

Este projeto faz parte dos desafios práticos da **Digital Innovation One (DIO)**. O objetivo inicial era criar um algoritmo em JavaScript puro para classificar heróis com base em sua quantidade de experiência (XP). 

Para elevar o nível do portfólio no GitHub, o desafio foi expandido para uma **interface web interativa completa**, inspirada em janelas de status de sistemas de RPG (estética *Solo Leveling* / Sci-Fi), contendo painéis dinâmicos, barras de progresso de nível e histórico de sessões em tempo real.

---

## 🎨 Layout & Visualização

<p align="center">
  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop" width="100%" alt="Ambiente de desenvolvimento e interface de jogos">
</p>

A interface foi desenvolvida utilizando uma paleta de cores escuras de alto contraste (*Dark Mode*), fontes tipográficas futuristas (`Orbitron` e `Rajdhani`) e efeitos de *glow* reativos que mudam de cor conforme o rank atingido pelo herói (de Ferro a Radiante).

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da Janela do Sistema, formulários e listas de histórico.
* **CSS3:** Estilização avançada com Flexbox, Grid Layout, variáveis CSS dinâmicas e animações de transição.
* **JavaScript (ES6+):** Lógica de negócios cobrindo os pilares solicitados no desafio:
  * 📦 **Variáveis** para armazenamento de nome, XP e estados.
  * ⚙️ **Operadores** relacionais e lógicos para checagem de faixas de XP.
  * 🔀 **Estruturas de Decisão** (`if / else if / else`) para definição de patamares de rank.
  * 🔄 **Laços de Repetição** (`for`) para renderização dinâmica do histórico de avaliações.

---

## 📋 Regras de Classificação (Tabela de Ranks)

O sistema avalia o XP inserido e aplica automaticamente a regra de negócio do desafio:

| Faixa de XP | Nível / Rank | Cor da Aura / Tema |
| :--- | :--- | :--- |
| **Menor ou igual a 1.000 XP** | Ferro | Cinza Metálico (`#94a3b8`) |
| **1.001 a 2.000 XP** | Bronze | Bronze (`#d97706`) |
| **2.001 a 5.000 XP** | Prata | Prata (`#e2e8f0`) |
| **5.001 a 7.000 XP** | Ouro | Dourado (`#facc15`) |
| **7.001 a 8.000 XP** | Platina | Verde Água (`#2dd4bf`) |
| **8.001 a 9.000 XP** | Ascendente | Roxo Místico (`#a855f7`) |
| **9.001 a 10.000 XP** | Imortal | Carmesim (`#ef4444`) |
| **Maior ou igual a 10.001 XP** | Radiante | Azul Neon (`#00d4ff`) |

---

## ⚙️ Como Executar o Projeto Localmente

Clone o repositório e abra o projeto diretamente no seu navegador:

```bash
# Clone este repositório
git clone [https://github.com/dylanclarkl/dio-classificador-nivel-heroi.git](https://github.com/dylanclarkl/dio-classificador-nivel-heroi.git)

# Entre na pasta do projeto
cd dio-classificador-nivel-heroi

# Abra o arquivo index.html no seu navegador de preferência
# (Ou utilize a extensão Live Server do VS Code)

## 👨‍💻 Autor
Desenvolvido com 💜 por **Dylan Clark Lopes** como parte da jornada de estudos em Desenvolvimento Full-Stack e Lógica de Programação.

[![GitHub](https://img.shields.io/badge/GitHub-dylanclarkl-181717?style=flat-square&logo=github)](https://github.com/dylanclarkl)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dylan_Clark_Lopes-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dylan-clark-lopes-48b377184/)