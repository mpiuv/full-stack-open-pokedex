/* eslint-disable linebreak-style */
import express from 'express'
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
})
