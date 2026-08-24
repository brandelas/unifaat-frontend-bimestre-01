# Unifaat :: Frontend :: Aula 02 - CSS, Seletores e JS Reativo

---

## 1. Instalação e Execução <a name="instalacao-e-execucao"></a>

### Siga os passos abaixo para rodar o projeto via Docker:

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-frontend-bimestre-01
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-frontend-bimestre-01
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o `.env.example`:


   ```sh
   cp .env.example .env
   ```

4. Subir a aplicação com Docker Compose:


   ```sh
   docker compose up --build
   ```


---

## 2. 📁 Estrutura de Diretórios (raiz) <a name="estrutura-de-diretorios-raiz"></a>

| Caminho / Pasta      | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `docker/`            | Dockerfiles específicos para cada serviço da aplicação.                   |
| `public/`            | Arquivos públicos (como `index.html`) servidos diretamente por HTTP.     |
| `.env`               | Variáveis de ambiente sensíveis carregadas em tempo de execução.          |
| `.env.example`       | Template de `.env` para novos devs copiarem e configurarem.               |
| `.gitignore`         | Lista de arquivos e pastas que o Git deve ignorar.                        |
| `docker-compose.yml` | Orquestração dos containers do projeto.                                   |
| `readme.md`          | Documentação principal do projeto (este arquivo).                         |

---

## 3. 🐳 Containers e Imagens Docker <a name="containers-e-imagens-docker"></a>

### 🗄️ Containers de Infraestrutura

| Container         | Imagem Base         | Função                                           | Porta Interna |
|-------------------|---------------------|--------------------------------------------------|---------------|
| `nginx-container` | `nginx:1.25-alpine` | Servir arquivos estáticos HTTP (reverse proxy).  | 80            |

### 💾 Volumes Persistentes

| Volume        | Utilizado por     | Finalidade                 |
|---------------|-------------------|----------------------------|
| `./public:/var/www` | `nginx_01` | Disponibilizar os arquivos estáticos da pasta `public/` dentro do container. |

### 🌐 Redes

Todos os containers estão conectados à rede Docker personalizada:

```text
app_network
```

### 🌍 Portas Expostas Externamente

| Serviço | Porta Interna | Porta Externa | Acesso Externo        |
|---------|---------------|---------------|-----------------------|
| NGINX   | 80            | **8080**      | http://localhost:8080 |


---

# Atividades desenvolvidas

## TF01 — Aula 01: Servidor de Arquivos Estáticos e DOM

No TF01 foi implementada uma lista dinâmica utilizando JavaScript e manipulação do DOM.

### Funcionalidades implementadas

- Adicionar novos itens à lista;
- Impedir a adição de itens vazios;
- Excluir itens individualmente;
- Manipular elementos da árvore DOM utilizando JavaScript.

---

## TF02 — Aula 02: CSS, Seletores e JS Reativo

No TF02 foi adicionada a funcionalidade de edição dos itens existentes na lista.

### Funcionalidades implementadas

- Entrar no modo de edição ao clicar no texto de um item;
- Substituir o texto por um campo `input` preenchido com o valor atual;
- Alterar o nome utilizando o botão **Alterar**;
- Confirmar a alteração utilizando a tecla **Enter**;
- Impedir que valores vazios sejam salvos;
- Manter a funcionalidade de exclusão dos itens;
- Utilizar `event.target` e `event.currentTarget` para diferenciar cliques no item e nos botões;
- Separar a lógica de edição no arquivo `editNameList.js`;
- Utilizar `import` e `export` para trabalhar com módulos JavaScript.

### Arquivos adicionados ou modificados

- `public/js/createNameList.js`
- `public/js/editNameList.js`
