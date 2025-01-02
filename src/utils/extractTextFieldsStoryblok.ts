// ใน storyblok ตอนใส่เนื้อหา สามารถขึ้นบรรทัดใหม่ได้ ใน api มันมองเป้น array ใหม่
// function นี้นำ text กลับมาต่อกันเป็น string

const collectTextFields = (obj: any): string[] => {
  let result: string[] = []
  if (Array.isArray(obj)) {
    obj.forEach(item => (result = result.concat(collectTextFields(item))))
  } else if (typeof obj === 'object' && obj !== null) {
    if (obj.text) result.push(obj.text)
    Object.values(obj).forEach(
      value => (result = result.concat(collectTextFields(value)))
    )
  }
  return result
}

export const extractTextFieldsStoryblok = (data: any): string => {
  const result = collectTextFields(data).join(' ')
  return result.slice(0, 120) // Return the first 120 characters
}
