## 🧩  Estrutura do projeto

Teu projeto deve ter algo assim:

rick-and-morty/
  index.html
  style.css
  script.js
  assets/   (opcional - ícones, logo, etc)
  README.md



# 👽 Rick and Morty Explorer

Aplicação web simples que consome a **API pública do seriado Rick and Morty**, exibindo todos os personagens com nome e imagem.  
Ao clicar na foto de um personagem, são exibidas informações detalhadas como espécie, status e planeta de origem.

---

## 🚀 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (fetch API)**
- **[Rick and Morty API](https://rickandmortyapi.com/api/character/)**

---

## 🧠 Funcionalidades

- Exibe automaticamente todos os personagens da série.  
- Mostra nome e imagem de cada personagem.  
- Ao clicar em um personagem, exibe:
  - Nome completo  
  - Espécie  
  - Status (Vivo, Morto, Desconhecido)  
  - Local de origem  

---

## 🗂️ Estrutura de Arquivos



📁 rick-and-morty/
├── index.html # Página principal
├── style.css # Estilo da aplicação
├── script.js # Consumo da API e interação com o DOM
└── assets/ # Ícones e imagens auxiliares (opcional)


---

## ⚙️ Como executar localmente

1. Faz o clone do repositório:

   git clone https://github.com/vitorknierin/rick-and-morty-api.git


Abre o arquivo index.html no navegador.

💡 Dica: se quiser testar com servidor local, usa a extensão Live Server do VSCode.

## 🌐 API utilizada

https://rickandmortyapi.com/api/character

Essa API retorna dados de todos os personagens, incluindo imagem, nome, status, espécie e localização.

💅 Melhorias futuras

Campo de busca por nome do personagem.

Filtros por status (vivo, morto, desconhecido).

Paginação.

Exibição dos episódios em que o personagem aparece.

Tema escuro / claro.

👨‍💻 Autor

Vitor Hugo Meira da Costa Knierin
Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas – IFSul Campus Bagé

📫 LinkedIn

💻 GitHub


---

## ☁️ 4. (Opcional) Publicar online
Se quiser deixar acessível sem precisar rodar localmente:

### 🔹 Via GitHub Pages
1. No repositório → **Settings → Pages**  
2. Branch: `main` → Pasta: `/ (root)`  
3. Clica em **Save**

O GitHub gera uma URL assim:


https://vitorknierin.github.io/rick-and-morty-api/


### 🔹 Ou via Firebase Hosting (se preferir manter tudo lá)
firebase init hosting
firebase deploy --only hosting