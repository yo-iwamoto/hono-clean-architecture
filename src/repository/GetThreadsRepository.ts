import { PrismaClient } from '@prisma/client';
import { IGetThreadsRepository } from './IGetThreadsRepository';

export class GetThreadsRepository implements IGetThreadsRepository {
  constructor(private readonly db: PrismaClient) {}

  async execute() {
    return this.db.thread.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
