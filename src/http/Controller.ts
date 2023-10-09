import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';

export interface Controller {
  handle: (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;
}
