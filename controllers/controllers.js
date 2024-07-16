// @Get Views and Layout
const getView = (req, res) => res.render("welcome.ejs");
const getRegister = (req, res) => res.render("register.ejs");
const getLogin = (req, res) => res.render("login.ejs");
const getHome = (req, res) => res.render("home.ejs");

//@Post Views And Validation
const postRegister = (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    let errors = [];
    if (password !== confirmPassword) {
      errors.push({ msg: "Paasword Do Not Match" });
    }
    if (!username || !email || !password || !confirmPassword) {
      errors.push({ msg: "Please Fill All Fields" });
    }
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (!validateEmail(email)) {
      errors.push({ msg: "Invalid Email" });
    }
    if (errors.length > 0) {
      res.status(201).render("register", {
        errors,
        username,
        email,
        password,
        confirmPassword,
      });
    } else {
      

    }
  } catch (error) {
    res.status(500).send("Internal Server Err");
  }
};

export default { getView, getRegister, getLogin, getHome, postRegister };
