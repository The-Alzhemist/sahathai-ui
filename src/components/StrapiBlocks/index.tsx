import React from 'react'

import { getStrapiImageUrl } from '@/libs/util'
import { RichTextNode } from '@/types/DescriptionType'

const HEADING_CLASSES: Record<number, string> = {
  1: 'text-3xl font-semibold',
  2: 'text-2xl font-semibold',
  3: 'text-xl font-semibold',
  4: 'text-lg font-semibold',
  5: 'text-base font-semibold',
  6: 'text-sm font-semibold',
}

function renderInline(node: RichTextNode, key: number): React.ReactNode {
  if (node.type === 'link') {
    return (
      <a
        key={key}
        href={node.url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-secondary underline'
      >
        {renderChildren(node.children)}
      </a>
    )
  }

  let content: React.ReactNode = node.text ?? ''

  if (node.code) content = <code key={`c${key}`}>{content}</code>
  if (node.bold) content = <strong key={`b${key}`}>{content}</strong>
  if (node.italic) content = <em key={`i${key}`}>{content}</em>
  if (node.underline) content = <u key={`u${key}`}>{content}</u>
  if (node.strikethrough) content = <s key={`s${key}`}>{content}</s>

  return <React.Fragment key={key}>{content}</React.Fragment>
}

function renderChildren(children: RichTextNode[] = []): React.ReactNode {
  return children.map((child, index) => renderInline(child, index))
}

function renderListItem(node: RichTextNode, key: number): React.ReactNode {
  // A list item mixes inline content with optional nested lists.
  const inline = (node.children ?? []).filter(child => child.type !== 'list')
  const nested = (node.children ?? []).filter(child => child.type === 'list')

  return (
    <li key={key}>
      {renderChildren(inline)}
      {nested.map((list, index) => renderBlock(list, index))}
    </li>
  )
}

function renderBlock(node: RichTextNode, key: number): React.ReactNode {
  switch (node.type) {
    case 'heading': {
      const level = Math.min(Math.max(node.level ?? 2, 1), 6)
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
      return (
        <Tag key={key} className={HEADING_CLASSES[level]}>
          {renderChildren(node.children)}
        </Tag>
      )
    }
    case 'list': {
      const Tag = node.format === 'ordered' ? 'ol' : 'ul'
      return (
        <Tag
          key={key}
          className={`pl-6 space-y-1 ${
            node.format === 'ordered' ? 'list-decimal' : 'list-disc'
          }`}
        >
          {(node.children ?? []).map((item, index) =>
            renderListItem(item, index)
          )}
        </Tag>
      )
    }
    case 'quote':
      return (
        <blockquote key={key} className='border-l-4 border-gray-300 pl-4 italic'>
          {renderChildren(node.children)}
        </blockquote>
      )
    case 'code':
      return (
        <pre key={key} className='overflow-x-auto rounded bg-gray-100 p-3 text-sm'>
          <code>{renderChildren(node.children)}</code>
        </pre>
      )
    case 'image':
      return node.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={key}
          src={getStrapiImageUrl(node.image.url)}
          alt={node.image.alternativeText ?? ''}
          className='h-auto max-w-full'
        />
      ) : null
    default:
      return <p key={key}>{renderChildren(node.children)}</p>
  }
}

export function StrapiBlocks({
  body,
  className,
}: {
  body: RichTextNode[]
  className?: string
}) {
  return (
    <div className={className ?? 'space-y-3'}>
      {body.map((node, index) => renderBlock(node, index))}
    </div>
  )
}
