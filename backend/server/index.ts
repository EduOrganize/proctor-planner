import app from './app';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
