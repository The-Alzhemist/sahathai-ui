import { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'

export const shareholderMeeting2568 = (
  t: (key: string, values?: Record<string, any>) => string
): AccordionItem[] => {
  const year = 2568
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
      files:  [
        {
          title: t('invitation.document', { year }),
          name: 'invite-2568.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.meetingReport2567', { year:year - 1 }),
          name: 'report-2567.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.annualReport2567', { year:year - 1  }),
          name: 'annual-report-2567.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.candidateInfo'),
          name: 'candidate-info.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.confirmationChannel'),
          name: 'confirmation-channel.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.registrationGuide'),
          name: 'registration-guide.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.proxyInfo'),
          name: 'proxy-info.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.proxyFormA'),
          name: 'proxy-form-a.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.proxyFormB'),
          name: 'proxy-form-b.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.proxyFormC'),
          name: 'proxy-form-c.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.eAgmGuide'),
          name: 'e-agm-guide.pdf',
          type: 'pdf',
        },
        {
          title: t('invitation.privacyNotice'),
          name: 'privacy-notice.pdf',
          type: 'pdf',
        },
      ]
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
          name: 'https://www.youtube.com/watch?v=N7I7cp5Erdg',
          type: 'youtube',
        },
      ],
    },
  ];
};
