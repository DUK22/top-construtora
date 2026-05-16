# Top Construtora & Negocios Imobiliarios

Landing page institucional para a Top Construtora & Negocios Imobiliarios, criada em HTML, CSS e JavaScript puro.

Site publicado: https://top-construtora.vercel.app/

## Visao geral

O site apresenta a empresa, seus servicos, metodo de trabalho, destaques de obras, depoimentos e um formulario de contato integrado ao WhatsApp.

## Estrutura

```text
.
|-- index.html       # Conteudo e estrutura da landing page
|-- styles.css       # Identidade visual, layout e responsividade
|-- script.js        # Menu mobile, ano automatico e envio para WhatsApp
|-- robots.txt       # Regras basicas para rastreadores
|-- sitemap.xml      # Mapa do site com a URL publica
`-- 404.html         # Pagina simples para rotas inexistentes
```

## Como visualizar localmente

Abra o arquivo `index.html` diretamente no navegador.

Tambem e possivel usar a extensao Live Server do VS Code para recarregamento automatico durante ajustes.

## Publicacao na Vercel

Este projeto e estatico e nao precisa de build.

Configuracao sugerida na Vercel:

- Framework Preset: `Other`
- Build Command: deixar vazio
- Output Directory: deixar vazio
- Install Command: deixar vazio

Depois do deploy, a URL publica configurada para SEO e compartilhamento e:

```text
https://top-construtora.vercel.app/
```

## Pontos para personalizar

- Atualizar telefone e link do WhatsApp em `index.html` e `script.js`.
- Trocar o e-mail de contato.
- Substituir imagens remotas por fotos reais da empresa ou das obras.
- Ajustar textos de depoimentos com nomes reais, se houver autorizacao.
- Atualizar `sitemap.xml`, `robots.txt` e a tag canonical caso o dominio mude.

## Tecnologias

- HTML5
- CSS3 responsivo
- JavaScript sem dependencias
- Vercel
