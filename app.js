import express from 'express';
import { PORT } from './config/env.js';

import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
    res.send( 'Welcome to the Subscription Tracker API!');
});

app.listen( PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
})

export default app;
