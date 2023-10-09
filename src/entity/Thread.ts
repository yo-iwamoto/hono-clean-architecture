type ThreadProps = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Thread {
  public readonly id: string;
  public readonly title: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: ThreadProps) {
    this.id = props.id;
    this.title = props.title;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
