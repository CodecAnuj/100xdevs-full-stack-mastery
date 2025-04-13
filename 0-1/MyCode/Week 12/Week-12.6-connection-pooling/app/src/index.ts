import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export default {
	async fetch(request: Request, env: { DATABASE_URL: string }): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		const response = await prisma.log.create({
			data: {
				level: 'Info',
				message: 'Request received',
				meta: { headers: JSON.stringify(request.headers) },
			},
		});

		console.log(JSON.stringify(response));

		return Response.json(response);
	},
};
