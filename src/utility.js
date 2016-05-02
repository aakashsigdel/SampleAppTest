const Validation = function () {
  this.emailRegex = /^([a-z0-9_+\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  this.usernameRegex = /^[a-zA-Z0-9]+$/
}

Validation.prototype.email = function (email) {
  return this.emailRegex.test(email)
}

Validation.prototype.password = function (password) {
  if (password.length < 8)
    return false
  return true
}

Validation.prototype.username = function (username) {
  if (username.length >= 8)
    return this.usernameRegex.test(username)
  return false
}

Validation.prototype.mobile = function (number) {
  if (number.length !== 9)
    return false
  return true
}

Validation.prototype.confirmPassword = function (password, confirmPassword) {
  if(password === confirmPassword && confirmPassword !== '')
    return true
  return false
}

export default Validation
