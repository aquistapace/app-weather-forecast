export function removeBar(data: string) {
  
  let newData = data.split("/",2)
  return newData.length>1 ? newData[1] : ''
  
}

export function removeDot(data: string) {
  let newData = data.split(".",2)
  return newData[0]
}
