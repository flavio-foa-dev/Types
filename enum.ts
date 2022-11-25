enum HttpStatus {
  ok = 200,
  created = 201,
  internalServeError = 500
}

console.log(HttpStatus.ok)
console.log(HttpStatus.created)
console.log(HttpStatus.internalServeError);