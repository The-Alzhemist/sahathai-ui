
export const activity2567 = (
  t: (key: string, values?: Record<string, any>) => string,
): any => {
  const year = 2567
  return [
    {
      title: t('title', { year }),
      files: [
        {
          title: t('quarter.one'),
          name: 'https://www.youtube.com/watch?v=CxUtecq7d2E',
          type: 'youtube',
        },
        {
          title: t('quarter.two'),
          name: 'https://www.youtube.com/watch?v=P3odnt7ZiCA',
          type: 'youtube',
        },
        {
          title: t('quarter.three'),
          name: 'https://www.youtube.com/watch?v=Qmkfqk1eNT0',
          type: 'youtube',
        },
        {
          title: t('quarter.four'),
          name: 'https://www.youtube.com/watch?v=eZeghN5n5Xw',
          type: 'youtube',
        },
      ],
    },

  ];
};
