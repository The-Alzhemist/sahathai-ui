import { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'

export const documentAnnouncement2567 = (
  t: (key: string, values?: Record<string, any>) => string,
): AccordionItem[] => {
  const year = 2567
  return [
    {
      title: t('title', { year }),
      files: [
        {
          title: t('quarter.one'),
          name: 'invite-2568.pdf',
          type: 'pdf',
        },
        {
          title: t('quarter.two'),
          name: 'presentation.pdf',
        },
        {
          title: t('quarter.three'),
          name: 'presentation.pdf',
        },
        {
          title: t('quarter.four'),
          name: 'presentation.pdf',
        },
      ],
    },

  ];
};
