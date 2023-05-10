import { ActivitiesCard } from '@/components/ActivitiesCard'

type ActivitiesCard = {
  documentLink: string
  name: string
  type: 'document' | 'link'
}

export const activitiesMock: ActivitiesCard[] = [
  {
    documentLink: 'assets/files/atividade1.docx',
    name: 'Experiência de Usuário - Google Sites',
    type: 'document'
  },
  {
    documentLink: 'assets/files/atividade2.docx',
    name: 'Aplicativo whatsapp',
    type: 'document'
  },
  {
    documentLink: 'assets/files/atividade3.pdf',
    name: 'Heurísticas de usabilidade de Nielsen',
    type: 'document'
  },
  {
    documentLink:
      'figma.com/file/PYIoTS5Vd8bMfG5FZXT4Jk/Atividades?type=design&node-id=1-13&t=IDVFgPntPFi6JVv7-0',
    type: 'link',
    name: 'Análise de interface - Nubank e SIGAA '
  }
]

export const activitiesMockFull: ActivitiesCard[] = [
  ...activitiesMock,
  {
    documentLink: 'assets/files/atividade5.pdf',
    name: 'Teste de usabilidade',
    type: 'document'
  },
  {
    documentLink:
      'figma.com/file/PYIoTS5Vd8bMfG5FZXT4Jk/Atividades?type=design&node-id=20-2&t=Oi8IAF7HOO9ROcik-0',
    name: 'Teste de usabilidade 2',
    type: 'link'
  },
  {
    documentLink:
      'figma.com/file/PYIoTS5Vd8bMfG5FZXT4Jk/Atividades?node-id=49%3A2&t=Qravj1wcNmTOMCih-1',
    name: 'Planejamento do projeto',
    type: 'link'
  },
  {
    documentLink:
      'figma.com/file/PYIoTS5Vd8bMfG5FZXT4Jk/Atividades?node-id=49%3A2&t=Qravj1wcNmTOMCih-1',
    name: 'Planejamento do projeto',
    type: 'link'
  },
  {
    documentLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdfG8x5zDOrI-1D1z8h9SvAt5MXZ2tmqGIXMtvTwbe3dLoxdA/viewform',
    name: 'Formulário - Interfaces Digitais',
    type: 'link'
  },
  {
    documentLink: 'https://lactoseonline.vercel.app/',
    name: 'Projeto - MVP',
    type: 'link'
  }
]
