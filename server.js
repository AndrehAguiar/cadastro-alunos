import app from "./app";

const PORT = 3001
app.listen(PORT, () => {
  console.log(`\nListen on port ${ PORT }`);
  console.log(`CTRL + Click on http://localhost:${ PORT }`);
})
