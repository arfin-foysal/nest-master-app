export class CreateCommentDto {
    readonly content: string;
    readonly postId: any;  // Use number type, not string
  }