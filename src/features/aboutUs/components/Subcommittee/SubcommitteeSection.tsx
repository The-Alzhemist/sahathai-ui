import { AvatarIcon } from '@/components/icons/AvatarIcon'
import { Committee } from '@/types/Committee'
import { RichTextChild, RichTextNode } from '@/types/DescriptionType'

function RichTextInline({ child }: { child: RichTextChild }) {
  let content: React.ReactNode = child.text

  if (child.bold) content = <strong>{content}</strong>
  if (child.italic) content = <em>{content}</em>
  if (child.underline) content = <u>{content}</u>
  if (child.strikethrough) content = <s>{content}</s>

  return content
}

function RichTextBody({ body }: { body: RichTextNode[] }) {
  return (
    <div className='space-y-3'>
      {body.map((node, index) => (
        <p key={index}>
          {node.children.map((child, childIndex) => (
            <RichTextInline key={childIndex} child={child} />
          ))}
        </p>
      ))}
    </div>
  )
}

export function SubcommitteeSection({ committee }: { committee: Committee }) {
  return (
    <section className='text-black-6'>
      {committee.content.map(block => {
        if (block.__component === 'shared.committee-member') {
          return (
            <div key={block.id} className='flex items-center md:items-end gap-3 mb-3'>
              <div className='self-start'>
                <AvatarIcon className='text-base relative mr-[15px]' />
              </div>

              <div className='flex flex-wrap items-center gap-x-5'>
                <div className='max-w-[300px]'>{block.name}</div>
                <div>{block.role}</div>
              </div>
            </div>
          )
        }

        return (
          <div key={block.id} className='mb-7'>
            <RichTextBody body={block.body} />
          </div>
        )
      })}
    </section>
  )
}
