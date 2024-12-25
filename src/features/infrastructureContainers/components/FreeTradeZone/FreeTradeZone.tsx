import { useTranslations } from 'next-intl'
import Image from 'next/image'

const OcrCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string
  title: string
  description: string
}) => (
  <div className='rounded-[15px] shadow-2 min-w-[300px] min-h-[200px] bg-white flex justify-center items-center'>
    <div className='w-[40%]'>
      <Image src={imageSrc} width={120} height={120} alt={title} />
    </div>
    <div className='w-[50%]'>
      <h3 className='text-gray-600 text-xl mb-2'>{title}</h3>
      <p className='text-sm text-black-6'>{description}</p>
    </div>
  </div>
)

const FreeTradeZone = () => {
  const t = useTranslations('InfrastructureContainersPage.FreeTradeZone')
  const cardsData = [
    {
      imageSrc: '/infrastructure-containers/ocr_tax.png',
      title: t('List.FreeZone.Title'),
      description: t('List.FreeZone.Description'),
    },
    {
      imageSrc: '/infrastructure-containers/ocr_facility.png',
      title: t('List.Facility.Title'),
      description: t('List.Facility.Description'),
    },
    {
      imageSrc: '/infrastructure-containers/ocr_stock.png',
      title: t('List.Stock.Title'),
      description: t('List.Stock.Description'),
    },
    {
      imageSrc: '/infrastructure-containers/ocr_fcl.png',
      title: t('List.Fcl.Title'),
      description: t('List.Fcl.Description'),
    },
  ]

  return (
    <section className='container my-[80px]'>
      <h2 className='headline-2 text-navy text-center mb-[10px]'>
        {t('Title')}
      </h2>
      <p className='body-2 text-black-6 text-center mb-[45px] max-w-[896px] mx-auto'>
        {t('Description')}
      </p>
      <div className='max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto'>
        {cardsData.map((card, index) => (
          <OcrCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FreeTradeZone
