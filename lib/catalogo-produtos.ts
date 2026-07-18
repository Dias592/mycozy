// Catálogo mestre dos 100 produtos do My Cozy Home, relacionados às 4
// categorias do site. Cada entrada vira uma página /melhores/[slug]/ —
// o termoBusca é usado em searchProducts() (lib/mercadolivre.ts) pra
// trazer os produtos reais via API do Mercado Livre.
//
// prioridade define a ordem de criação de conteúdo e o `priority` do
// sitemap (alta: 0.8 · media: 0.6 · baixa: 0.4).

import type { Categoria } from './types';

export type Prioridade = 'alta' | 'media' | 'baixa';

export type ProdutoCatalogo = {
  termoBusca: string; // query enviada pra API do Mercado Livre
  slug: string; // /melhores/[slug]/
  categoria: Categoria;
  prioridade: Prioridade;
};

export const catalogoProdutos: ProdutoCatalogo[] = [
  // ───────────────────────── Decoração ─────────────────────────
  { termoBusca: 'luminária pendente quarto',          slug: 'melhor-luminaria-pendente-quarto',     categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'abajur de mesa',                      slug: 'melhor-abajur-mesa',                    categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'quadro decorativo sala',              slug: 'melhor-quadro-decorativo-sala',         categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'tapete para sala',                    slug: 'melhor-tapete-sala',                    categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'almofada decorativa',                 slug: 'melhor-almofada-decorativa',            categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'cortina blackout',                    slug: 'melhor-cortina-blackout',                categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'espelho decorativo parede',           slug: 'melhor-espelho-decorativo-parede',       categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'vaso decorativo',                     slug: 'melhor-vaso-decorativo',                 categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'prateleira flutuante',                slug: 'melhor-prateleira-flutuante',            categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'fita led decorativa',                 slug: 'melhor-fita-led-decorativa',             categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'manta para sofá',                     slug: 'melhor-manta-sofa',                      categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'papel de parede autoadesivo',         slug: 'melhor-papel-parede-autoadesivo',        categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'arandela de parede',                  slug: 'melhor-arandela-parede',                 categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'escada decorativa madeira',           slug: 'melhor-escada-decorativa',               categoria: 'decoracao', prioridade: 'baixa' },
  { termoBusca: 'difusor de aromas',                   slug: 'melhor-difusor-aromas',                  categoria: 'decoracao', prioridade: 'alta' },
  { termoBusca: 'vela aromática',                      slug: 'melhor-vela-aromatica',                  categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'porta-retrato decorativo',            slug: 'melhor-porta-retrato',                   categoria: 'decoracao', prioridade: 'baixa' },
  { termoBusca: 'cachepot para plantas',               slug: 'melhor-cachepot-plantas',                categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'planta artificial decorativa',        slug: 'melhor-planta-artificial',               categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'cabideiro de chão decorativo',        slug: 'melhor-cabideiro-chao',                  categoria: 'decoracao', prioridade: 'baixa' },
  { termoBusca: 'relógio de parede decorativo',        slug: 'melhor-relogio-parede',                  categoria: 'decoracao', prioridade: 'baixa' },
  { termoBusca: 'puff decorativo',                     slug: 'melhor-puff-decorativo',                 categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'painel ripado decorativo',            slug: 'melhor-painel-ripado',                   categoria: 'decoracao', prioridade: 'baixa' },
  { termoBusca: 'luminária de piso coluna',            slug: 'melhor-luminaria-piso',                  categoria: 'decoracao', prioridade: 'media' },
  { termoBusca: 'kit de quadros decorativos',          slug: 'melhor-kit-quadros-decorativos',         categoria: 'decoracao', prioridade: 'media' },

  // ──────────────────────── Organização ────────────────────────
  { termoBusca: 'organizador de closet',               slug: 'melhor-organizador-closet',              categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'cabide antideslizante kit',           slug: 'melhor-cabide-antideslizante',           categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'caixa organizadora com tampa',        slug: 'melhor-caixa-organizadora',              categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'organizador de sapatos',              slug: 'melhor-organizador-sapatos',             categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'organizador de pia banheiro',         slug: 'melhor-organizador-pia-banheiro',        categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'nicho organizador banheiro',          slug: 'melhor-nicho-organizador-banheiro',      categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'organizador de gaveta divisórias',    slug: 'melhor-organizador-gaveta',              categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'rack organizador multiuso',           slug: 'melhor-rack-organizador',                categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'cesto organizador roupa suja',        slug: 'melhor-cesto-roupa-suja',                categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'organizador de potes plástico',       slug: 'melhor-organizador-potes',               categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'suporte organizador de panelas',      slug: 'melhor-suporte-organizador-panelas',     categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'organizador de geladeira',            slug: 'melhor-organizador-geladeira',           categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'potes herméticos organizadores',      slug: 'melhor-potes-hermeticos',                categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'organizador de maquiagem',            slug: 'melhor-organizador-maquiagem',           categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'prateleira para armário',             slug: 'melhor-prateleira-armario',              categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'organizador de fios e cabos',         slug: 'melhor-organizador-cabos',               categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'cabide de gravata e cinto',           slug: 'melhor-cabide-gravata-cinto',            categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'organizador de mala de viagem',       slug: 'melhor-organizador-mala-viagem',         categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'suporte para tábuas de corte',        slug: 'melhor-suporte-tabuas-corte',            categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'organizador aéreo de teto',           slug: 'melhor-organizador-aereo',               categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'varal de teto retrátil',              slug: 'melhor-varal-teto-retratil',             categoria: 'organizacao', prioridade: 'alta' },
  { termoBusca: 'suporte escova de dente',             slug: 'melhor-suporte-escova-dente',            categoria: 'organizacao', prioridade: 'baixa' },
  { termoBusca: 'organizador de brinquedos',           slug: 'melhor-organizador-brinquedos',          categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'cesto aramado organizador',           slug: 'melhor-cesto-aramado',                   categoria: 'organizacao', prioridade: 'media' },
  { termoBusca: 'divisória expansiva gaveta cozinha',  slug: 'melhor-divisoria-gaveta-cozinha',        categoria: 'organizacao', prioridade: 'baixa' },

  // ────────────────────────── Cozinha ──────────────────────────
  { termoBusca: 'air fryer',                           slug: 'melhor-air-fryer',                       categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'liquidificador',                      slug: 'melhor-liquidificador',                   categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'jogo de panelas antiaderente',        slug: 'melhor-jogo-panelas-antiaderente',        categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'potes herméticos mantimentos',        slug: 'melhor-potes-mantimentos',                categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'cafeteira elétrica',                  slug: 'melhor-cafeteira-eletrica',               categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'cortador de legumes multifuncional',  slug: 'melhor-cortador-legumes',                 categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'jogo de facas de cozinha',            slug: 'melhor-jogo-facas-cozinha',               categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'tábua de corte',                      slug: 'melhor-tabua-corte',                      categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'espremedor de frutas elétrico',       slug: 'melhor-espremedor-frutas',                categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'batedeira planetária',                slug: 'melhor-batedeira-planetaria',             categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'panela de pressão elétrica',          slug: 'melhor-panela-pressao-eletrica',          categoria: 'cozinha', prioridade: 'alta' },
  { termoBusca: 'sanduicheira grill elétrico',         slug: 'melhor-sanduicheira-grill',               categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'fruteira decorativa de bancada',      slug: 'melhor-fruteira-bancada',                 categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'escorredor de louça',                 slug: 'melhor-escorredor-loucas',                categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'jogo americano sousplat',             slug: 'melhor-jogo-americano',                   categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'balança de cozinha digital',          slug: 'melhor-balanca-cozinha',                  categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'porta-tempero giratório',             slug: 'melhor-porta-tempero',                    categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'kit utensílios de silicone cozinha',  slug: 'melhor-kit-utensilios-silicone',          categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'mixer de mão',                        slug: 'melhor-mixer-mao',                        categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'forma de silicone para assar',        slug: 'melhor-forma-silicone',                   categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'cooktop portátil elétrico',           slug: 'melhor-cooktop-portatil',                 categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'chaleira elétrica',                   slug: 'melhor-chaleira-eletrica',                categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'garrafa térmica',                     slug: 'melhor-garrafa-termica',                  categoria: 'cozinha', prioridade: 'media' },
  { termoBusca: 'jogo de taças de vidro',              slug: 'melhor-jogo-tacas-vidro',                 categoria: 'cozinha', prioridade: 'baixa' },
  { termoBusca: 'suporte de papel toalha',             slug: 'melhor-suporte-papel-toalha',             categoria: 'cozinha', prioridade: 'baixa' },

  // ───────────────────── Cama, mesa e banho ─────────────────────
  { termoBusca: 'jogo de lençol 400 fios',             slug: 'melhor-jogo-lencol-400-fios',             categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'edredom casal',                       slug: 'melhor-edredom-casal',                    categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'jogo de toalhas de banho',            slug: 'melhor-jogo-toalhas-banho',               categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'travesseiro',                         slug: 'melhor-travesseiro',                      categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'protetor de colchão impermeável',     slug: 'melhor-protetor-colchao',                 categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'manta de microfibra para cama',       slug: 'melhor-manta-microfibra',                 categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'toalha de mesa impermeável',          slug: 'melhor-toalha-mesa',                      categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'jogo de cama infantil',               slug: 'melhor-jogo-cama-infantil',               categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'roupão de banho',                     slug: 'melhor-roupao-banho',                     categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'tapete para banheiro antiderrapante', slug: 'melhor-tapete-banheiro',                  categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'cortina para box de banheiro',        slug: 'melhor-cortina-box-banheiro',             categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'jogo de cobre-leito colcha',          slug: 'melhor-cobre-leito',                      categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'fronha de cetim',                     slug: 'melhor-fronha-cetim',                     categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'kit enxoval de bebê',                 slug: 'melhor-kit-enxoval-bebe',                 categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'almofada de amamentação',             slug: 'melhor-almofada-amamentacao',             categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'jogo de guardanapo de tecido',        slug: 'melhor-guardanapo-tecido',                categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'capa de sofá ajustável',              slug: 'melhor-capa-sofa',                        categoria: 'cama-mesa-banho', prioridade: 'alta' },
  { termoBusca: 'travesseiro corporal body pillow',    slug: 'melhor-travesseiro-corporal',             categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'kit toalhas de rosto lavabo',         slug: 'melhor-toalhas-rosto',                    categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'colcha piquet',                       slug: 'melhor-colcha-piquet',                    categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'saia box para cama',                  slug: 'melhor-saia-box',                         categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'trilho de mesa caminho de mesa',      slug: 'melhor-trilho-mesa',                      categoria: 'cama-mesa-banho', prioridade: 'baixa' },
  { termoBusca: 'kit jogo de banho com tapete',        slug: 'melhor-kit-jogo-banho',                   categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'edredom infantil temático',           slug: 'melhor-edredom-infantil',                 categoria: 'cama-mesa-banho', prioridade: 'media' },
  { termoBusca: 'travesseiro de pescoço viagem',       slug: 'melhor-travesseiro-pescoco',              categoria: 'cama-mesa-banho', prioridade: 'baixa' },
];

// Helpers úteis pras páginas do projeto

export function getProdutosPorCategoria(categoria: Categoria): ProdutoCatalogo[] {
  return catalogoProdutos.filter((p) => p.categoria === categoria);
}

export function getProdutosPorPrioridade(prioridade: Prioridade): ProdutoCatalogo[] {
  return catalogoProdutos.filter((p) => p.prioridade === prioridade);
}

export function getSitemapPriority(prioridade: Prioridade): number {
  return { alta: 0.8, media: 0.6, baixa: 0.4 }[prioridade];
}
