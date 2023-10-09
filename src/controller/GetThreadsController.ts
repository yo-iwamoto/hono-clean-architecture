import { Controller } from '@/http/Controller';
import { HttpRequest } from '@/http/HttpRequest';
import { HttpResponse } from '@/http/HttpResponse';
import { GetThreadsUsecase } from '@/usecase/GetThreadsUsecase';

export class GetThreadsController implements Controller {
  constructor(private readonly usecase: GetThreadsUsecase) {}

  async handle() {
    const threads = await this.usecase.execute();
    return new HttpResponse({
      status: 200,
      data: threads,
    });
  }
}
