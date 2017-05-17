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
/*const SignOutSuccess = (data) => {
  console.log(data)
}

const SignOutFailure = (error) => {
  console.error(error)
}*/
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  ChangepasswordSuccess,
  ChangepasswordFailure
  //SignOutSuccess,
  //SignOutFailure
}
