const express = require("express");
const cors = require('cors');
const app = express();
const jwt = require("jsonwebtoken");

const User = require('./database/schemas/user')

// json 
app.use(express.json());

// db connection
require('./database/connection')

/* for cross origin */
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
})
);

app.post('/user/register', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ 'email': email });
  if (user) return res.status(403).json('Ya existe una cuenta con esas credenciales!')
  else {
    const newUser = await new User(req.body);
    newUser.save()
    res.status(200).json('Cuenta creada correctamente.');
  }
});

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.email }, "supercontra", { expiresIn: "1m", });
};

app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ 'email': email, 'password': password });
  if (!user) res.status(400).json("Correo electrónico o contraseña incorrecta!");
  else {
    const accessToken = generateAccessToken(user);
    res.json({
      email: user.email,
      accessToken,
    });
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    console.log(authHeader);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "supercontra", (err, user) => {
      if (err) {
        return res.status(403).json("Token invalido!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("No estas autenticado!");
  }
};

app.post("/user/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  console.log(refreshToken);
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("Te has deslogeado correctamente!");
});

app.listen(5000, () => console.log("Servidor iniciado"));