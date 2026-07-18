import type { Categoria } from './types';

export const CATEGORIA_LABELS: Record<Categoria, string> = {
  decoracao: 'Decoração',
  organizacao: 'Organização',
  cozinha: 'Cozinha',
  'cama-mesa-banho': 'Cama, Mesa e Banho',
};

export const CATEGORIA_DESCRIPTIONS: Record<Categoria, string> = {
  decoracao: 'Luminárias, tapetes, quadros e o que dá personalidade ao ambiente',
  organizacao: 'Soluções pra casas pequenas e rotinas mais leves',
  cozinha: 'Do essencial ao que realmente vale o espaço na bancada',
  'cama-mesa-banho': 'Conforto de verdade — do lençol ao roupão',
};

export const CATEGORIA_KEYWORDS: Record<Categoria, string[]> = {
  decoracao: ['decoração de casa', 'casa aconchegante', 'itens de decoração'],
  organizacao: ['organização de casa pequena', 'caixas organizadoras', 'organização de armário'],
  cozinha: ['essenciais de cozinha', 'jogo de panelas', 'utensílios de cozinha'],
  'cama-mesa-banho': ['jogo de cama', 'jogo de toalhas', 'edredom casal'],
};
