import { storyblokEditable } from '@storyblok/react/rsc'
import {
  render,
  MARK_ANCHOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_LINK,
  MARK_STRIKE,
  MARK_TEXT_STYLE,
  MARK_UNDERLINE,
  NODE_BR,
  NODE_HEADING,
  NODE_HR,
  NODE_IMAGE,
  NODE_PARAGRAPH,
  NODE_OL,
  NODE_LI,
  NODE_QUOTE,
  NODE_UL,
} from 'storyblok-rich-text-react-renderer'

import Image from 'next/image'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'
import DownloadLink from '@/components/Storyblok/news/DownloadLink'

import { EventNewsDetailCard as EventNewsDetailCardStoryblok } from '.storyblok/types/316761/storyblok-components'
import { SbBlokData } from '@storyblok/react'
import { isValidElement } from 'react'

interface EventNewsDetailCardProps {
  blok: EventNewsDetailCardStoryblok
}

function getTextAlignStyle(textAlign?: string): React.CSSProperties | undefined {
  if (!textAlign) {
    return undefined
  }

  return {
    textAlign: textAlign as React.CSSProperties['textAlign'],
  }
}

function hasBlockChild(children: React.ReactNode) {
  return Array.isArray(children)
    ? children.some(
        (child) => isValidElement(child) && ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'blockquote', 'hr'].includes(String(child.type))
      )
    : isValidElement(children) && ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'blockquote', 'hr'].includes(String(children.type))
}

const EventNewsDetailCard: React.FC<EventNewsDetailCardProps> = ({ blok }) => {
  const nodeResolvers = {
    [NODE_PARAGRAPH]: (
      children: React.ReactNode,
      props?: { textAlign?: string }
    ) => {
      const className = 'mb-4 whitespace-break-spaces break-words'
      const style = getTextAlignStyle(props?.textAlign)

      if (hasBlockChild(children)) {
        return (
          <div className={className} style={style}>
            {children}
          </div>
        )
      }

      return (
        <p className={className} style={style}>
          {children}
        </p>
      )
    },
    [NODE_HEADING]: (
      children: React.ReactNode,
      props?: { level?: 1 | 2 | 3 | 4 | 5 | 6; textAlign?: string }
    ) => {
      const className = {
        1: 'mb-6 text-4xl font-semibold text-navy',
        2: 'mb-5 text-3xl font-semibold text-navy',
        3: 'mb-4 text-2xl font-semibold text-navy',
        4: 'mb-4 text-xl font-semibold text-navy',
        5: 'mb-3 text-lg font-semibold text-navy',
        6: 'mb-3 text-base font-semibold text-navy',
      }[props?.level ?? 6]

      const style = getTextAlignStyle(props?.textAlign)

      switch (props?.level) {
        case 1:
          return <h1 className={className} style={style}>{children}</h1>
        case 2:
          return <h2 className={className} style={style}>{children}</h2>
        case 3:
          return <h3 className={className} style={style}>{children}</h3>
        case 4:
          return <h4 className={className} style={style}>{children}</h4>
        case 5:
          return <h5 className={className} style={style}>{children}</h5>
        default:
          return <h6 className={className} style={style}>{children}</h6>
      }
    },
    [NODE_UL]: (children: React.ReactNode) => (
      <ul className='mb-4 list-disc pl-5 space-y-2'>{children}</ul>
    ),
    [NODE_OL]: (children: React.ReactNode) => (
      <ol className='mb-4 list-decimal pl-5 space-y-2'>{children}</ol>
    ),
    [NODE_LI]: (children: React.ReactNode) => (
      <li className='mb-1 text-gray-700 break-words'>{children}</li>
    ),
    [NODE_QUOTE]: (children: React.ReactNode) => (
      <blockquote className='mb-4 border-l-4 border-blue-200 pl-4 italic text-gray-700'>
        {children}
      </blockquote>
    ),
    [NODE_HR]: () => <hr className='my-6 border-gray-200' />,
    [NODE_BR]: () => <br />,
    [NODE_IMAGE]: (
      _children: React.ReactNode,
      props?: { src?: string; alt?: string; title?: string }
    ) => {
      if (!props?.src) {
        return null
      }

      return (
        <div className='mb-4'>
          <Image
            src={props.src}
            alt={props.alt || props.title || 'Storyblok image'}
            width={1200}
            height={800}
            className='h-auto max-w-full rounded-[5px]'
          />
        </div>
      )
    },
  }

  const markResolvers = {
    [MARK_ANCHOR]: (
      children: React.ReactNode,
      props?: { id?: string }
    ) => {
      if (!props?.id) {
        return <>{children}</>
      }

      return <span id={props.id}>{children}</span>
    },
    [MARK_BOLD]: (children: React.ReactNode) => <strong>{children}</strong>,
    [MARK_ITALIC]: (children: React.ReactNode) => <em>{children}</em>,
    [MARK_UNDERLINE]: (children: React.ReactNode) => <u>{children}</u>,
    [MARK_STRIKE]: (children: React.ReactNode) => <s>{children}</s>,
    [MARK_CODE]: (children: React.ReactNode) => (
      <code className='rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800'>
        {children}
      </code>
    ),
    [MARK_HIGHLIGHT]: (
      children: React.ReactNode,
      props?: { color?: string }
    ) => (
      <mark
        className='px-0.5 text-inherit'
        style={{ backgroundColor: props?.color || '#FEF08A' }}
      >
        {children}
      </mark>
    ),
    [MARK_TEXT_STYLE]: (
      children: React.ReactNode,
      props?: { color?: string }
    ) => <span style={{ color: props?.color }}>{children}</span>,
    [MARK_LINK]: (
      children: React.ReactNode,
      props?: {
        linktype?: string
        href?: string
        target?: string
        anchor?: string
      }
    ) => {
      const href = props?.linktype === 'email'
        ? `mailto:${props.href}`
        : props?.href || props?.anchor || '#'

      const target = props?.target
      const isExternal = target === '_blank' || /^https?:\/\//.test(href)

      return (
        <a
          href={href}
          target={target}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className='break-all text-blue-500 underline underline-offset-2'
        >
          {children}
        </a>
      )
    },
  }

  return (
    <main {...storyblokEditable(blok as SbBlokData)} className='mb-10'>
      <section className='bg-white flex flex-col p-3 md:p-10 rounded-[5px]'>
        <Image
          src={blok.newsImageCover?.filename || '/background.jpg'}
          alt={blok.newsImageCover?.alt || 'Default background'}
          width={blok.newsImageCover?.width || 800}
          height={blok.newsImageCover?.height || 450}
          className='rounded-[5px] mx-auto mb-5'
          priority
        />
        <div className='text-sm text-gray-600 mb-5'>{blok.newsDate}</div>
        <h2 className='text-navy font-medium mb-3'>{blok.newsTitle}</h2>
        <div className='text-gray-600 k2d'>
          {render(blok.newsDescription, {
            nodeResolvers,
            markResolvers,
            blokResolvers: {
              ['showOneImage']: (props: any) => {
                return <ShowOneImage {...props} />
              },
              ['showTwoImage']: (props: any) => {
                return <ShowTwoImage {...props} />
              },
              ['showThreeImage']: (props: any) => {
                return <ShowThreeImage {...props} />
              },
              ['downloadLink']: (props: any) => {
                return <DownloadLink {...props} />
              },
            },
          })}
        </div>
      </section>
    </main>
  )
}

export default EventNewsDetailCard
