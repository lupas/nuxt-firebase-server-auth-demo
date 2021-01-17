const express = require('express')
var cors = require('cors')
var admin = require('firebase-admin');
const app = express()
const port = 3001

app.use(cors())

app.get('/api/', (req, res) => {
  const idToken = getIdToken(req)
  verifyIdToken(idToken)
  res.send(`Request received! Token: ${idToken}`)
})

app.listen(port, () => {
  initializeFirebase()
  console.log(`Example app listening at http://localhost:${port}`)
})


function getIdToken(req) {
  // Parse the injected ID token from the request header.
  const authorizationHeader = req.headers.authorization || ''
  const components = authorizationHeader.split(' ')
  return components.length > 1 ? components[1] : ''
}

function initializeFirebase() {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

function verifyIdToken(idToken) {
  console.log("TOKEN:", idToken)
  admin
  .auth()
  .verifyIdToken(idToken)
  .then((decodedToken) => {
    const uid = decodedToken.uid
    console.log("Succes:", uid)
  })
  .catch((error) => {
    console.error("Could not verify ID token!", error)
  })
}