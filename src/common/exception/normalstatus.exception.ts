import {  HttpException, HttpStatus } from '@nestjs/common';

export class NormalStatusException extends HttpException {
    constructor() {
      super('NormalStatusE', HttpStatus.FORBIDDEN);
    }
  }