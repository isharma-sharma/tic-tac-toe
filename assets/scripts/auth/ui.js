'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.error(error)
}
const ChangepasswordSuccess = (data) => {
  console.log(data)
}

const ChangepasswordFailure = (error) => {
  console.error(error)
}

const createGameSuccess = (data) => {
  console.log(data)
}

const createGamefailure = (error) => {
  console.error(error)
}
const getGameSuccess = (data) => {
  console.log(data)
}

const getGameFailure = (error) => {
  console.error(error)
}

const showGameSuccess = (data) => {
  console.log(data)
}

const showGameFailure = (error) => {
  console.error(error)
}

// const SignOutSuccess = (data) => {
//   console.log(data)
// }
//
// const SignOutFailure = (error) => {
//   console.error(error)
// }
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  ChangepasswordSuccess,
  ChangepasswordFailure,
  createGameSuccess,
  createGamefailure,
  getGameSuccess,
  getGameFailure,
  showGameSuccess,
  showGameFailure
  // SignOutSuccess,
  // SignOutFailure
}
