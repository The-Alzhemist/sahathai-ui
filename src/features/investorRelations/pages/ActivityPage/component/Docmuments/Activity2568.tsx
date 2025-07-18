import { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'

export const activity2568 = (
  t: (key: string, values?: Record<string, any>) => string,
): AccordionItem[] => {
  const year = 2568
  return [
    {
      title: t('title', { year }),
      files: [
        {
          title: t('quarter.one'),
          name: 'https://www.youtube.com/watch?v=sNHWdcayEhg',
          type: 'youtube',
        },
        {
          title: t('quarter.two'),
          name: '',
          type: 'youtube',
        },
        {
          title: t('quarter.three'),
          name: '',
          type: 'youtube',
        },
        {
          title: t('quarter.four'),
          name: '',
          type: 'youtube',
        },
      ],
    },

  ];
};
