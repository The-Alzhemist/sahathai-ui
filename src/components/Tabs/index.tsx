import { cn } from '@/libs/util'
import { TabsProps } from './interface'
import { Tab } from './Tab'

export function Tabs({ className, tabs, style, active, onChange }: TabsProps) {
  return (
    <div
      className={cn('flex overflow-x-auto gap-x-2', className, {
        'p-[4px] border-[2px] border-primary rounded-full': style === 'border',
      })}
    >
      {tabs.map(row => (
        <Tab
          key={row.title}
          title={row.title}
          icon={row.icon}
          style={style}
          isActive={active === row.key || active === row.title}
          onClick={() => onChange(row.key ?? row.title)}
        />
      ))}
    </div>
  )
}
