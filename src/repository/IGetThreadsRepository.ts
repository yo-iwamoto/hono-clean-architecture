export interface IGetThreadsRepository {
  execute: () => Promise<
    Array<{
      id: string;
      createdAt: Date;
      updatedAt: Date;
      title: string;
    }>
  >;
}
