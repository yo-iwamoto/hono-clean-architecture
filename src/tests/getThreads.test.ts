import app from '@/app';

describe('getThreads', () => {
  it('should return 200', async () => {
    const res = await app.request('/api/threads');

    expect(res.status).toBe(200);
  });
});
