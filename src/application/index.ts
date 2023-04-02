import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Project Init' });
});

app.listen(3000, () => console.log('online'));
