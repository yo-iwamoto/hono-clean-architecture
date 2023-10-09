import app from './app';
import { serve } from '@hono/node-server';

serve(app, ({ port }) => {
  console.log(`Server is running on port ${port}`);
});
