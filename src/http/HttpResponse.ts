type HttpResponseProps = {
  readonly status: number;
  readonly data: unknown;
};

export class HttpResponse {
  public readonly status: number;
  public readonly data: unknown;

  constructor(props: HttpResponseProps) {
    this.status = props.status;
    this.data = props.data;
  }
}
