import { HttpException, HttpStatus } from '@nestjs/common';

export class Response {
  static success(data: any, message = 'Success', statusCode = 200) {
    return {
      data,
      message,
      status: true,
      statusCode,
    };
  }

  static error(error: any, message = 'Error', statusCode = 400) {
    throw new HttpException(
      {
        errors: error,
        message,
        status: false,
        statusCode,
      },
      statusCode,
    );
  }
}
