import express from 'express'
import userRouters from './src/routes/user.routes.js'
const app = express()

app.use(express.json()) //pra receber json
app.use(userRouters)



app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})
