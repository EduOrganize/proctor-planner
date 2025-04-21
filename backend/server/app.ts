import path from 'path';
import express, { Request, Response } from 'express';

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

const app = express();

app.use(express.static(DIST_DIR));
app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.status(200);
  res.send({ message: "Hello from Node.js/Express Server!" });
});

app.get('/{*splat}', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

export default app;