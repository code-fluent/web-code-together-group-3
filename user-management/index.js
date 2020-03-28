const bcrypt = require("bcrypt");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "CODEit!(94",
    database: "accounts"
  }
});

const signUp = async (name, email, password) => {
  const hash = await bcrypt.hash(password, 12);
  return knex("users").insert({
    name: name,
    email: email,
    password: hash
  });
};

const login = async (email, password) => {
  const users = await knex
    .select()
    .from("users")
    .where("email", "=", email);

  if (users.length === 0) throw new Error("Email not found.");
  const user = users[0];

  const doPasswordsMatch = await bcrypt.compare(password, user.password);
  if (!doPasswordsMatch) throw new Error("Incorrect password.");

  return user;
};

// signUp("Tamás Pap", "tamas@tamaspap.com", "CODEit!(94").catch(error =>
//   console.error(error)
// );

login("tamas@tamaspap.com", "CODEit!(94")
  .then(user => console.log("Successful login", user))
  .catch(error => console.error(error));
