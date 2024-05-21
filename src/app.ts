// importing from express
import express, { Application, Request, Response } from 'express'

// importing cors
import cors from 'cors'

const app: Application = express()

// parsers
app.use(express.json())

// cors
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
