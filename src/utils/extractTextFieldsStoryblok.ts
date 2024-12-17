// ใน storyblok ตอนใส่เนื้อหา สามารถขึ้นบรรทัดใหม่ได้ ใน api มันมองเป้น array ใหม่
// function นี้นำ text กลับมาต่อกันเป็น string
export const extractTextFieldsStoryblok = (data: any) => {
  let result: any = []

  const traverse = (obj: any) => {
    if (Array.isArray(obj)) {
      obj.forEach(item => traverse(item))
    } else if (typeof obj === 'object' && obj !== null) {
      if (obj.text) result.push(obj.text)
      Object.values(obj).forEach(value => traverse(value))
    }
  }

  traverse(data)
  return result.join(' ')
}
