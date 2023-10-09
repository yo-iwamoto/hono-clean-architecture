import type { Thread } from '@/entity/Thread';

export interface IGetThreadsUsecase {
  execute(): Promise<Thread[]>;
}
