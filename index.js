import express from "express"
import router from "./routes/prime.js";

const app = express();

app.use('/api/v1/isprime', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});