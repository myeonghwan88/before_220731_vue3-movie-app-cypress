exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'idmash',
      age: 88,
      email: 'idmash88@gmail.com'
    })
  }
}