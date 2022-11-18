const CustomAPIError = require("../errors/custom-error")

const login = async (req, res, next) => {
  const { username, password } = req.body

  // mongo
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400)
  }
  res.send("Fake Login/Register/Signup Route")
}

const dashboard = (req, res, next) => {
  const luckyNumber = Math.random() * 100
  res.status(200).json({
    msg: `Hello there`,
    secret: `Here is your authorized data, the lucky number is: ${luckyNumber}`,
  })
}

module.exports = {
  login,
  dashboard,
}
