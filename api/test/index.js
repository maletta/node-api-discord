module.exports = (req, res) => {
  const {
    query: { name },
  } = req;
  console.log("--------------");
  console.log(Object.keys(req));
  console.log("---------------");

  res.json({ request: process.env.TOKEN_BOT });
};
