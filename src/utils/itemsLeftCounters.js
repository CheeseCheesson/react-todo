export function calcLeftItems(array) {
  if(array) return array.filter((item) => !item.status).length
}
