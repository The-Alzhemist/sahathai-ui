import { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'

export const WarrantW3 = (
  t: (key: string, values?: Record<string, any>) => string
): AccordionItem[] => {
  const code = 'PORT-W3'


  return [
    {
      title: t('tabs.condition'),
      files: [
        {
          title: t('content.condition'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.round1', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "1" }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.round2', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "2"  }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.round3', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "3"  }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.round4', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "4"  }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.round5', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "5"  }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('tabs.roundFinal', { code }),
      files: [
        {
          title: t('content.round1Notice', { code, number: "สุดท้าย"  }),
          name: 'round1-notice.pdf',
          type: 'pdf',
        },
        {
          title: t('content.conditionNote'),
          name: 'condition-note.pdf',
          type: 'pdf',
        },
        {
          title: t('content.formNote'),
          name: 'form-declaration.pdf',
          type: 'pdf',
        },
      ],
    },
  ]
}
