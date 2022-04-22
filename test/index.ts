function qwerParese(code: string, codeBook:{}) {
  // console.log(codeBook)
  Object.keys(codeBook).forEach((key) => {
    code = code.replace(new RegExp(codeBook[key], 'g'), key)
  })
  
  return code
}

export {
  qwerParese
}