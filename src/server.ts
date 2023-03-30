import express from 'express';
import config from './config/config';

const app = express();
const port = config.development.port || 3000;

app.get('/', (req, res) => {
  return res.json({ message: 'Project Init' });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
