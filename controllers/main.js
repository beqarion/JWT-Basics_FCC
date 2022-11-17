const login = async (req, res, next) => {
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
