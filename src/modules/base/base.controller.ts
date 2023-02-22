import { HttpStatus } from "@nestjs/common";
import { m_constants } from "src/modules/utils/const";
import { getLine } from "src/modules/utils/utils";

export class BaseController {


  success (data: any,message='成功'){
    return {
        code : HttpStatus.OK,
        data : data,
        message : message,
        success : true
    }
  }

  response(result: any) {
    if (result && result.error) {
      if (result.message) {
        return {
          ResponseCode: result.error,
          ResponseMessage: result.message,
          ResponseResult: null,
        };
      } else {
        if (m_constants.ERROR_MESSAGES[result.error]) {
          return {
            ResponseCode: result.error,
            ResponseMessage: m_constants.ERROR_MESSAGES[result.error],
            ResponseResult: null,
          };
        }
        else {
          return {
            ResponseCode: m_constants.RESPONSE_RESULT.resCodeError,
            ResponseMessage: result.error,
            ResponseResult: null,
          };
        }
      }
    } else {
      return {
        ResponseCode: m_constants.RESPONSE_RESULT.resCodeSucceed,
        ResponseMessage: "",
        ResponseResult: result ? result : null,
      };
    }
  }

  consoleLog(...args: any[]) {
    console.log(getLine(), ...args);
  }

  consoleError(...args: any[]) {
    console.error(getLine(), ...args);
  }
}
