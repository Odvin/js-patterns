const localStorage = require('./localStorage')

// This part of the code was written from the browser
// We have to create an adapter to use the code on a server
// There is no localStorage on a server
// json file on disk would be used to save user token

// The localStorage we have loaded is the adapter
console.log(`localStorage length: ${localStorage.length}`)

const uid = localStorage.getItem('user_id')

console.log(`user_id: ${uid}`)

if (!uid) {
  console.log('User ID not found. Setting the user id and token...')
  localStorage.setItem('token', 'TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ')
  localStorage.setItem('user_id', '12345')
} else {
  console.log(`User ID found. ${uid}`)
  console.log('clearning the User ID...')
  localStorage.clear()
}
