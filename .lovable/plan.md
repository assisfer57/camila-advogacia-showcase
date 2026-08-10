# Landing page — Camila Silva Advocacia

Landing page one-page em português, com o nível de acabamento do site de referência (Sadhana): hero editorial, fotos em composição sobreposta, seções com respiro, micro-animações no scroll e CTA de WhatsApp sempre acessível.

## Identidade visual

- Paleta Noir & Dourado: preto profundo (#0d0d0d), grafite (#1a1a1a), dourado (#c9a84c), dourado claro (#f0d78c), off-white para respiro.
- Tipografia: serif elegante para títulos (autoridade jurídica) + sans humanista para textos; assinatura "Camila Silva" em script, como no site atual dela.
- Detalhes: filetes dourados, cantos suaves, sombras discretas, formas geométricas de fundo como no site de referência.

## Fotos

As fotos reais dela no site do Canva não têm URL pública, mas conseguem ser capturadas com renderização do site. Vou extrair os retratos reais (foto do hero, foto do "Sobre mim" e as imagens das áreas de atuação) direto do site dela e usá-los na landing. Onde não houver foto aproveitável, uso imagem de ambiente jurídico gerada (mesa, livros, balança) — sem rosto, apenas apoio visual.

## Estrutura da página (one-page com âncoras)

1. **Header fixo** — assinatura/logo, navegação (Sobre, Atuação, Missão, Contato) e botão "Falar no WhatsApp".
2. **Hero** — "Bem-vinda(o)! Eu sou Camila Silva · Advogada", subtítulo com mais de 7 anos de experiência e atendimento em todo o Brasil, dois CTAs (WhatsApp e "Áreas de atuação"), composição de fotos sobrepostas.
3. **Faixa de credibilidade** — 3 destaques: +7 anos de atuação · 4 pós-graduações · atendimento em todo o Brasil.
4. **Sobre mim** — texto do site atual (atuação estratégica, técnica e humanizada; especialista em Previdenciário) + lista das pós-graduações (Direito Constitucional Aplicado, Tributário, Previdenciário, Aposentadoria Especial).
5. **Áreas de atuação** — 3 cards com o conteúdo real do site:
   - Previdenciário: aposentadorias, pensão por morte, benefícios do INSS, revisões, planejamento previdenciário.
   - Família e Proteção Patrimonial: divórcio, guarda, pensão alimentícia, inventário, união estável, violência doméstica, proteção patrimonial.
   - Criminal e Tributário: execução fiscal, defesa em estelionato, tráfico de drogas, violência doméstica.
   Cada card com CTA de WhatsApp já com mensagem pré-preenchida sobre aquela área.
6. **Minha missão** — bloco editorial com a citação da missão (advocacia humanizada, estratégica, ética) sobre fundo escuro com detalhe dourado.
7. **Como funciona o atendimento** — 3 passos: contato pelo WhatsApp → análise do caso → estratégia e acompanhamento próximo.
8. **Dúvidas frequentes** — accordion curto (atendimento online em todo o Brasil, como funciona a primeira conversa, documentos para análise previdenciária, sigilo e discrição).
9. **Contato** — WhatsApp (31) 99206-9989, Instagram @silvacamilaadvocacia, link do perfil no Google Maps ("CAMILA SILVA - CS ADVOCACIA") e formulário simples que abre a conversa no WhatsApp com a mensagem montada (sem backend).
10. **Footer** — assinatura, aviso de conformidade com o Provimento 205/2021 da OAB (sem promessa de resultado), © 2026.
11. **Botão flutuante de WhatsApp** em todas as telas.

## Detalhes técnicos

- Rota `/` reescrita em `src/routes/index.tsx`, seções quebradas em componentes em `src/components/`.
- Tokens de cor/tipografia no `src/styles.css` (`@theme inline` + `:root`), sem classes de cor cruas.
- Fontes carregadas via `<link>` no `src/routes/__root.tsx`.
- Animações de entrada no scroll com Motion (fade/slide discretos), respeitando `prefers-reduced-motion`.
- SEO: `head()` na rota `/` com title, description, og/twitter e JSON-LD `LegalService` (nome, telefone, áreas de atuação, redes).
- Sem banco de dados: o formulário monta um link `wa.me`. Nada de backend necessário.
- 100% responsivo, com menu mobile.

## Fora do escopo

Blog, área de cliente, agendamento automático e envio de e-mail (podem entrar depois se ela quiser).
