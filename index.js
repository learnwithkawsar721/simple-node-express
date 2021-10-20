const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PROT || 5000;
app.get("/", (req, res) => {
  res.send("I am lerning for Node js, ok good okk kkkkk  ");
});

const users = [
  { id: 0, name: "kawsar", email: "kawsar@gmail.com" },
  { id: 1, name: "Robiul", email: "Robiul@gmail.com" },
  { id: 2, name: "shopon", email: "shopon@gmail.com" },
  { id: 3, name: "naeem", email: "naeem@gmail.com" },
  { id: 4, name: "shahin", email: "shahin@gmail.com" },
  { id: 5, name: "jahidul", email: "jahidul@gmail.com" },
  { id: 6, name: "mamun", email: "mamun@gmail.com" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search),
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
