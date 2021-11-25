import express from 'express';
import { router } from './routes/events.route';
import config from './config/config';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({ origin: config.client.url }));
app.use(router);

app.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.hostname}:${config.server.port} 🚀🚀`);
});