export interface CNAE {
  codigo: string;
  descricao: string;
  registro: 'CRBio' | 'CREA' | 'CRBio e CREA' | 'Nenhum';
}

export const cnaes: CNAE[] = [
  {
    codigo: '7490-1/99',
    descricao:
      'Outras atividades profissionais, científicas e técnicas não especificadas anteriormente',
    registro: 'CRBio',
  },
  {
    codigo: '7490-1/03',
    descricao:
      'Serviços de agronomia e de consultoria às atividades agrícolas e pecuárias',
    registro: 'CREA',
  },
  {
    codigo: '8599-6/99',
    descricao: 'Outras atividades de ensino não especificadas anteriormente',
    registro: 'Nenhum',
  },
  {
    codigo: '7210-0/00',
    descricao:
      'Pesquisa e desenvolvimento experimental em ciências físicas e naturais',
    registro: 'CRBio',
  },
  {
    codigo: '8130-3/00',
    descricao: 'Atividades paisagísticas',
    registro: 'CREA',
  },
  {
    codigo: '0220-9/06',
    descricao: 'Conservação de florestas nativas',
    registro: 'CREA',
  },
  {
    codigo: '8599-6/04',
    descricao: 'Treinamento em desenvolvimento profissional e gerencial',
    registro: 'Nenhum',
  },
  {
    codigo: '7112-0/00',
    descricao: 'Serviços de engenharia',
    registro: 'CREA',
  },
  {
    codigo: '71199-7/01',
    descricao: 'Serviços de cartografia, topografia e geodésica',
    registro: 'CREA',
  },
  {
    codigo: '7119-7/02',
    descricao: 'Atividades de estudos geológicos',
    registro: 'CREA',
  },
];
