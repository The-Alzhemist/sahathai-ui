export type OpenTabsState = Record<number, number[]>

export function toggleTabInGroup(
  prev: OpenTabsState,
  groupIndex: number,
  tabIndex: number
): OpenTabsState {
  const groupOpenTabs = prev[groupIndex] ?? []

  const newOpenTabs = groupOpenTabs.includes(tabIndex)
    ? groupOpenTabs.filter(i => i !== tabIndex)
    : [...groupOpenTabs, tabIndex]

  return {
    ...prev,
    [groupIndex]: newOpenTabs,
  }
}
