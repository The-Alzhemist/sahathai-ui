import { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'

export const shareholderMeeting2567 = (
  t: (key: string, values?: Record<string, any>) => string,
): AccordionItem[] => {
  const year = 2567
  return [
    {
      title: t('title.proposeAgenda', { year }),
      files: [
        {
          title: t('proposeAgenda.criteria', { year }),
          name: 'invite-2568.pdf',
          type: 'pdf',
        },
        {
          title: t('proposeAgenda.nominationForm'),
          name: 'presentation.pdf',
        },
        {
          title: t('proposeAgenda.agendaForm'),
          name: 'presentation.pdf',
        },
        {
          title: t('proposeAgenda.questionForm'),
          name: 'presentation.pdf',
        },
      ],
    },
    {
      title: t('title.invitation', { year }),
      files: [
        {
          title: t('invitation.document', { year }),
          name: 'invite-2568.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('title.minutes', { year }),
      files: [
        {
          title: t('minutes.document', { year }),
          name: 'invite-2568.pdf',
          type: 'pdf',
        },
      ],
    },
    {
      title: t('title.video', { year }),
      files: [
        {
          title: '',
          name: 'https://www.youtube.com/watch?v=Gg-v2PfPZDg',
          type: 'youtube',
        },
      ],
    },
  ];
};
