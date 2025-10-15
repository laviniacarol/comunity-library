import express from 'express'
const app = express()

app.use(express.json()) // pra receber json
const users = []


app.post('/users', (req, res) => {
  const body = req.body
  users.push(body)
  res.status(201), send("Usuário criado com sucesso")
})

app.get("/users", (req, res) => {
    res.send({users})
})

app.listen(3001, () => {
  console.log('🔥 Servidor rodando na porta 3001')
})
