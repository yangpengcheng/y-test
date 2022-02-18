const title = import.meta.env.VITE_TITLE || '管理系统'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function getTitle(){
  return import.meta.env.VITE_TITLE || '管理系统'
}