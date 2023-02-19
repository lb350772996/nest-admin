import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      console.log()
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const exceptionRes: any = exception.getResponse();    
      const {
            
            message,
          } = exceptionRes;
          
      response.status(status).json({
        statusCode: status,
    
        message,
        timestamp: new Date().toISOString(),
        path: request.url,
        
      });
    }
  }