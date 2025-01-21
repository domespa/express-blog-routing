const express = require('express')
const app = express()
const port = 3001
const postsRouter = require("./routers/posts")

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

app.get("/bacheca", (req, res) => {
    res.json([
        {
            title: "Ciambellone soffice alla vaniglia",
            subtitle: "Un ciambellone soffice e profumato alla vaniglia, perfetto per la colazione o una merenda. Preparato con ingredienti semplici, è ideale per tutta la famiglia.",
            image: `http://localhost:${port}/imgs/ciambellone.jpeg`,
            tags: ["ciambellone", "colazione", "dolce", "merenda", "vaniglia"]
          },
          {
            title: "Cracker di barbabietola fatti in casa",
            subtitle: "Scopri come preparare dei cracker croccanti e salutari con la barbabietola, perfetti come snack o accompagnamento per i tuoi piatti. Facili e veloci da fare!",
            image: `http://localhost:${port}/imgs/ciambellone.jpeg`,
            tags: ["cracker", "barbabietola", "snack", "vegan", "salutare"]
          },
          {
            title: "Pane fritto dolce con zucchero e cannella",
            subtitle: "Un dolce semplice ma goloso: il pane fritto, ricoperto di zucchero e cannella, ideale per una merenda sfiziosa o come dessert. Provalo subito!",
            image: `http://localhost:${port}/imgs/pane_fritto_dolce.jpeg`,
            tags: ["pane fritto", "dolce", "zucchero", "cannella", "merenda"]
          },
          {
            title: "Pasta di barbabietola fresca",
            subtitle: "Una ricetta originale per preparare la pasta fresca con la barbabietola, che le dona un colore rosso vivace e un sapore delicato. Perfetta per un piatto unico e creativo.",
            image: `http://localhost:${port}/imgs/pasta_barbabietola.jpeg`,
            tags: ["pasta fresca", "barbabietola", "ricetta originale", "vegetariano", "primo piatto"]
          },
          {
            title: "Torta paesana, il dolce della tradizione",
            subtitle: "La torta paesana è un dolce tipico della tradizione lombarda, preparato con pane raffermo, cioccolato, noci e uvetta. Un piatto rustico che conquisterà tutti.",
            image: `http://localhost:${port}/imgs/torta_paesana.jpeg`,
            tags: ["torta paesana", "tradizione", "dolce rustico", "cioccolato", "pane raffermo"]
          }
    ])
})

// Registrare il router dentro app.js con il prefisso posts/
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})