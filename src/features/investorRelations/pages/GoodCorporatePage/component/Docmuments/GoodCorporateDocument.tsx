import { AccordionItem } from '@/features/investorRelations/pages/PerformanceReportPage/component/AccordientList'


export const goodCorporateDocument = (
  t: (key: string, values?: Record<string, any>) => string,
): AccordionItem[] => {
  return [
    {
      title: t('title'), // "เอกสารการกำกับดูแลกิจการที่ดี"
      files: [
        {
          title: t('document.governanceManual'),
          name: 'governance-manual.pdf',
          type: 'pdf',
        },
        {
          title: t('document.codeOfConduct'),
          name: 'code-of-conduct.pdf',
          type: 'pdf',
        },
        {
          title: t('document.boardCharter'),
          name: 'board-charter.pdf',
          type: 'pdf',
        },
        {
          title: t('document.chairmanDuties'),
          name: 'chairman-duties.pdf',
          type: 'pdf',
        },
        {
          title: t('document.auditCommitteeCharter'),
          name: 'audit-committee-charter.pdf',
          type: 'pdf',
        },
        {
          title: t('document.nominationAndRemunerationCharter'),
          name: 'nomination-remuneration-charter.pdf',
          type: 'pdf',
        },
        {
          title: t('document.riskGovernanceSustainabilityCommittee'),
          name: 'risk-governance-sustainability.pdf',
          type: 'pdf',
        },
        {
          title: t('document.executiveCommitteeCharter'),
          name: 'executive-committee-charter.pdf',
          type: 'pdf',
        },
        {
          title: t('document.ceoAuthorityAndResponsibilities'),
          name: 'ceo-authority.pdf',
          type: 'pdf',
        },
        {
          title: t('document.sustainabilityPolicy'),
          name: 'sustainability-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.riskManagementPolicy'),
          name: 'risk-management-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.insiderInformationPolicy'),
          name: 'insider-info-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.intellectualPropertyPolicy'),
          name: 'intellectual-property-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.csrPolicy'),
          name: 'csr-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.antiCorruptionPolicy'),
          name: 'anti-corruption-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.personalDataProtectionPolicy'),
          name: 'data-protection-policy.pdf',
          type: 'pdf',
        },
        {
          title: t('document.companyRegulation'),
          name: 'company-regulation.pdf',
          type: 'pdf',
        },
        {
          title: t('document.memorandumOfAssociation'),
          name: 'moa.pdf',
          type: 'pdf',
        },
        {
          title: t('document.companySecretaryContact'),
          name: 'secretary-contact.pdf',
          type: 'pdf',
        },
      ],
    },
  ];
};
