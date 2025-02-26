
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { ExpressUserRouter } from './lib/user/infrastructure/ExpressUserRouter';

const app = express();

app.use(ExpressUserRouter)

app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).send(err.message);
    }
    console.log(err);
    res.status(500).send('Something went wrong');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

