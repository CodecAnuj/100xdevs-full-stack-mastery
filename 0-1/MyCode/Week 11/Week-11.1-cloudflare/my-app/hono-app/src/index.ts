import { Hono, Context, Next } from 'hono';

const app = new Hono();

async function authMiddleware(c: Context, next: Next) {
	if (c.req.header('Authorization')) {
		const initTime = new Date(); // to measure how much time a request took
		await next();
		const totalTime = (new Date().getTime() - initTime.getTime()) / 1000; // to measure how much time a request took
		console.log(`it took ${totalTime} seconds`);
	} else {
		return c.text('you dont have access', 403);
	}
}

app.post('/', authMiddleware, async (c:Context) => {
	const body = await c.req.json();

	console.log(body);
	console.log(c.req.header('Authorization'));
	console.log(c.req.query('param'));

	return c.text('Hello Hono!');
});

export default app;
