import { Thread } from '@/entity/Thread';
import type { IGetThreadsUsecase } from './IGetThreadsUsecase';
import { IGetThreadsRepository } from '@/repository/IGetThreadsRepository';

export class GetThreadsUsecase implements IGetThreadsUsecase {
  constructor(private readonly repository: IGetThreadsRepository) {}

  async execute() {
    const rawThreads = await this.repository.execute();
    const threads = rawThreads.map(
      (raw) =>
        new Thread({
          id: raw.id,
          title: raw.title,
          createdAt: raw.createdAt,
          updatedAt: raw.updatedAt,
        }),
    );

    return threads;
  }
}
