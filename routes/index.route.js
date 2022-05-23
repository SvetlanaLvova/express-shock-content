const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const { User } = require("../db/models");

// главная страница (нет регистрации)
router.get('/', async (req, res) => {
  res.render('index')
});

// главная страница (для зарегистрированного пользователя)
router.get('/home', async (req, res) => {
  res.render('home')
});

// страница country
router.get('/country', async (req, res) => {
  res.render('country')
});

// страница jokes
router.get('/jokes', async (req, res) => {
  res.render('jokes')
});

// страница planets
router.get('/planets', async (req, res) => {
  res.render('planets')
});

//РОУТА ДЛЯ РЕГИСТРАЦИИ
router
  .route("/signup")
  .get((req, res) => {
    res.render("signup");
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex'); //шифруем пароль
    if (!name || !email || !password ) {
      return res.render("signup", { message: "Вы заполнили не все поля" });
    }
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    }).catch((e) => e);
    if (newUser instanceof Error) {
      return res.render("signup", {
        message: "Такой пользователь уже существует",
      });
    }
    req.session.userId = newUser.id;
    req.session.userName = newUser.name;
    req.session.email = newUser.email;

    return res.redirect("/home");
  });

  //РОУТА ДЛЯ ВХОДА
router
.route("/signin")
.get((req, res) => {
  return res.render("signin");
})
.post(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.render("signin", { message: "Вы заполнили не все поля" });
  }
  const currentUser = await User.findOne({ where: { email } , raw: true});
  if (currentUser instanceof Error) {
    return res.render("404");
  }
  if (!currentUser) {
    return res.render("signup", {
      message: "Пользователь не найден, зарегестрируйтесь",
    });
  }
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  if (hashedPassword !== currentUser.password) {
    return res.render("signin", { message: "Пароль неверный" });
  }
  req.session.userId = currentUser.id;
  req.session.userName = currentUser.name;
  req.session.email = currentUser.email;
  return res.redirect("/home");
});

//РОУТА ДЛЯ ВЫХОДА 
router.get('/logout', (req, res) => {
  req.session.destroy(); //удаляем сессию с сервера (или бд, если сессия хранится там)
  res.clearCookie('sid'); //говорим клиенту, чтобы он удалил куку
  res.redirect('/');
})

module.exports = router;
