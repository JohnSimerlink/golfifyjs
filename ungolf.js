function ungolf(code){
  console.log('golfed code is', code)
  code = code.replace("I", "if")
  console.log('ungolfed code is', code)
  eval(code)
}
