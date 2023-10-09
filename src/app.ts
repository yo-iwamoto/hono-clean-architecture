import { Hono } from 'hono';
import { GetThreadsController } from './controller/GetThreadsController';
import { GetThreadsUsecase } from './usecase/GetThreadsUsecase';
import { GetThreadsRepository } from './repository/GetThreadsRepository';
import { prisma } from './database/prisma';

const app = new Hono();

const controller = new GetThreadsController(
  new GetThreadsUsecase(new GetThreadsRepository(prisma)),
);

app.get('/api/threads', async (c) => {
  const result = await controller.handle();
  return c.json(result.data, result.status);
});

export default app;
