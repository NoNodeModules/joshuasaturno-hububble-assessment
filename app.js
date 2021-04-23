const express = require("express");
const ejs = require("ejs");
const fetch = require("node-fetch");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/search", async (req, res) => {
  if (req.body.pokename === "") {
    res.redirect("/");
    res.abort();
  }
  const pokename = req.body.pokename.toLowerCase();

  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((pokeData) => {
      const types = [];
      pokeData.types.map(type=>{
        types.push(type.type.name);
      });
      res.render("index", {
        pokeData: {
          name: pokeData.name,
          photo: pokeData.sprites.front_default,
          types: types,
          hp: pokeData.stats[0].base_stat,
          attack: pokeData.stats[1].base_stat,
          defense: pokeData.stats[2].base_stat,
          spAttack: pokeData.stats[3].base_stat,
          spDefense: pokeData.stats[4].base_stat,
          speed: pokeData.stats[5].base_stat,
        },
        message: "",
      });
    })
    .catch((err) => {
      res.render("index", {
        message: "Pokemon not found!",
      });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
