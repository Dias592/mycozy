// Roda antes de cada push: falha se algum produto ainda tiver link de
// afiliado ou imagem pendente. Ver docs do fluxo editorial no blueprint —
// nenhum PENDENTE_LINK_AFILIADO/PENDENTE_IMAGEM_ANUNCIO pode ir pra produção.
const fs = require('node:fs');
const path = require('node:path');

// Cobre tanto a string literal quanto o identificador importado
// (PENDING_AFFILIATE_URL / PENDING_IMAGE em lib/types.ts).
const SENTINELS = [
  'PENDENTE_LINK_AFILIADO',
  'PENDENTE_IMAGEM_ANUNCIO',
  'PENDING_AFFILIATE_URL',
  'PENDING_IMAGE',
];

// Só os arquivos de conteúdo (produtos/posts reais) — não os arquivos que
// apenas definem ou consomem a sentinela como valor de biblioteca
// (lib/types.ts, lib/mercadolivre.ts).
const CONTENT_FILES = [
  path.join(__dirname, '..', 'lib', 'melhores.ts'),
  path.join(__dirname, '..', 'lib', 'posts.ts'),
].filter((file) => fs.existsSync(file));

let found = false;

for (const file of CONTENT_FILES) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    for (const sentinel of SENTINELS) {
      if (line.includes(sentinel)) {
        found = true;
        console.log(`⚠️  ${path.relative(process.cwd(), file)}:${index + 1}  ${line.trim()}`);
      }
    }
  });
}

if (found) {
  console.log('\n❌ Existem produtos com link ou imagem pendente. Não publicar.\n');
  process.exit(1);
}

console.log('✅ Nenhum link ou imagem pendente encontrado.');
