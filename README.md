# Site — Renata Oliveira Psicóloga

Site institucional de Renata Oliveira, Psicóloga Clínica (CRP 06/51768-8), construído como um site estático (HTML, CSS e JavaScript puro, sem dependências de build) para máxima velocidade, indexação e compatibilidade com buscadores tradicionais e mecanismos de IA (AEO/GEO).

## Estrutura

```
├── index.html                     → Página inicial
├── sobre.html                     → Trajetória e experiência profissional
├── abordagens-terapeuticas.html   → Conteúdo educativo sobre Psicoterapia Psicodinâmica,
│                                     Psicoterapia Breve e a importância do registro no CRP
├── atendimento.html               → Detalhamento dos formatos de atendimento
├── contato.html                   → Contato e perguntas frequentes
├── 404.html                       → Página de erro personalizada
├── css/style.css                  → Estilos do site (paleta de cores da marca)
├── js/main.js                     → Menu mobile e acordeão de perguntas frequentes
├── images/                        → Logotipo e foto (fornecidos pela cliente)
├── robots.txt / sitemap.xml       → Arquivos de indexação para buscadores
└── llms.txt                       → Resumo estruturado do site para assistentes de IA (convenção llms.txt)
```

## Como publicar (GitHub Pages)

O site foi construído sem domínio definido, usando como URL de referência (canonical, sitemap, dados estruturados) o endereço do GitHub Pages:

```
https://ismalsoares.github.io/Renata-Oliveira/
```

Para publicar:
1. Faça merge deste branch na branch `main`.
2. No repositório, acesse **Settings → Pages**.
3. Em "Build and deployment", selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. Salve. O site ficará disponível em `https://ismalsoares.github.io/Renata-Oliveira/` em alguns minutos.

## Quando um domínio próprio for definido

Ao registrar um domínio (ex.: `www.renataoliveirapsicologa.com.br`), é necessário:
1. Criar um arquivo `CNAME` na raiz do repositório contendo apenas o domínio.
2. Substituir todas as ocorrências de `https://ismalsoares.github.io/Renata-Oliveira/` pelo novo domínio nos seguintes arquivos: cada `<link rel="canonical">` e tag `og:url`/`og:image` em cada página HTML, `sitemap.xml`, `robots.txt` e `llms.txt`.
3. Configurar o DNS do domínio apontando para o GitHub Pages (registros A/ALIAS ou CNAME, conforme a documentação do GitHub Pages).

## Contato e agendamento

Os botões "Agendar Consulta" e o ícone flutuante do WhatsApp apontam para `https://wa.me/5511994636556` com uma mensagem pré-formatada — o número não é exibido como texto na página, apenas embutido no link, conforme solicitado.

### Integração futura com Google Agenda
Por ora, todo agendamento é direcionado ao WhatsApp. Quando houver um link de agendamento (Google Calendar "Appointment Schedule" ou similar), basta substituir o `href` dos botões com classe `.botao-whatsapp` na seção de agendamento pelo link da agenda — a estrutura visual já está pronta para receber essa mudança sem redesenho.

## SEO, AEO e indexação para IA

- **Dados estruturados (JSON-LD)**: `Person`, `MedicalBusiness`/`ProfessionalService`, `WebSite`, `BreadcrumbList`, `Article` e `FAQPage` (esta última na página Abordagens Terapêuticas, com perguntas e respostas que também aparecem visivelmente no conteúdo, seguindo as diretrizes do Google).
- **llms.txt**: arquivo na raiz seguindo a convenção emergente para orientar assistentes de IA sobre o conteúdo confiável do site.
- **Conteúdo "resposta primeiro"**: os títulos e primeiros parágrafos de cada seção respondem diretamente à pergunta implícita (técnica central de AEO/GEO), facilitando a citação por mecanismos de busca com IA (Google AI Overviews, Bing Copilot, ChatGPT Search, Perplexity etc.).
- **Fontes citadas**: a página de Abordagens Terapêuticas cita fontes acadêmicas e institucionais verificáveis (Shedler, 2010 — *American Psychologist*; Lei nº 4.119/1962; Código de Ética Profissional do Psicólogo — Resolução CFP nº 010/2005; Instituto Sedes Sapientiae), reforçando E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
- **Acessibilidade**: hierarquia de headings, `alt` descritivo em imagens, skip-link, contraste de cores validado e navegação por teclado.

## Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| Verde | `#0c6333` | Cor primária, botões, títulos |
| Laranja | `#e97624` | Cor de destaque (mesma do logotipo) |
| Cinza | `#c7c8ca` | Fundos neutros e divisores |

## Pendências conhecidas
- Link do LinkedIn: `https://www.linkedin.com/in/renata-oliveira44/` (confirmar se está correto/ativo).
- Definir domínio próprio (opcional) e atualizar URLs conforme instruções acima.
- Avaliar, no futuro, a integração de agendamento via Google Agenda.
