# Mendes Jr · Shots & Notes

Site pessoal de fotografia, histórias e aulas. Feito em **Astro** + **Tailwind CSS**, com painel de edição via **Decap CMS**.

---

## 🏃 Rodando localmente

Você precisa ter o **Node.js 20+** instalado. Verifique com:

```bash
node -v
```

Se não tiver, baixe em [nodejs.org](https://nodejs.org).

No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Abre o navegador em `http://localhost:4321` e pronto — você vê a landing page.

---

## 🌐 Como publicar o site (passo a passo)

O fluxo: **GitHub** guarda o código → **Netlify** publica automaticamente → **Decap CMS** te deixa editar pelo navegador.

### 1. Criar conta no GitHub

Se ainda não tem, crie em [github.com](https://github.com). Depois:

1. Crie um novo repositório (botão "New" → nome: `mendes-jr-shots`)
2. **Deixe privado se quiser** — não faz diferença
3. No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeira versão"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/mendes-jr-shots.git
git push -u origin main
```

### 2. Criar conta na Netlify e conectar

1. Vá em [netlify.com](https://netlify.com) e entre com sua conta do GitHub
2. Clique em **"Add new site" → "Import an existing project"**
3. Escolha o repositório `mendes-jr-shots`
4. Configurações de build (já vêm preenchidas):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clica em **Deploy**

Em 1-2 minutos o site está no ar numa URL tipo `https://algum-nome.netlify.app`. Você pode trocar esse nome em **Site settings → Change site name**.

### 3. Ativar o painel de edição (Decap CMS)

Isso é o que te permite postar pelo navegador.

**3.1. Ativar Identity**
- Na Netlify, vá em **Site settings → Identity → Enable Identity**
- Em **Registration preferences**, escolha **"Invite only"** (assim só você entra)
- Em **Services → Git Gateway**, clique **Enable Git Gateway**

**3.2. Convidar seu email**
- Ainda em Identity, clique **Invite users** e adicione `mendesjr.fortal@gmail.com`
- Você vai receber um email. Clique no link pra criar a senha.

**3.3. Acessar o painel**
- Abra `https://seu-site.netlify.app/admin/`
- Faça login com o email e senha que criou
- Pronto! Você já consegue criar fotos, histórias e aulas pelo navegador.

---

## ✍️ Como postar conteúdo

Tem **duas formas**:

### Pelo painel (recomendado)
1. Abra `seu-site.com/admin/`
2. Escolha a seção (Portfólio, Histórias ou Aulas)
3. Clique **"New"**, preencha, faça upload das imagens
4. **Publish** — em ~1 minuto o site atualiza sozinho

### Direto no arquivo (avançado)
Crie um `.md` em:
- `src/content/portfolio/` — pras fotos
- `src/content/historias/` — pros textos
- `src/content/aulas/` — pras aulas (tipo: `texto` ou `video`)

Use os arquivos de exemplo como modelo. Imagens vão em `public/images/portfolio/`, `public/images/historias/` e `public/images/aulas/`.

Depois:
```bash
git add .
git commit -m "nova foto"
git push
```

---

## 🎨 Paleta e tipografia

- **Fundo**: `#0A1128` (navy 950)
- **Secundária**: `#1B263B` (navy 800)
- **Destaque**: `#415A77` (navy 600)
- **Texto**: `#E0E1DD` (sand 100)
- **Fontes**: Fraunces (display) + Inter (body) via Google Fonts

Pra mudar as cores, edite `tailwind.config.mjs`.

---

## 📁 Estrutura

```
src/
  pages/         # rotas do site
  layouts/       # layout base
  components/    # blocos reutilizáveis
  content/       # seu conteúdo em markdown
    portfolio/
    historias/
    aulas/
  styles/
public/
  admin/         # painel Decap CMS
  images/        # fotos
```

---

Dúvida? Manda ver. Boa luz. 📸
