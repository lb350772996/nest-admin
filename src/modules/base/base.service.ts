import { getLine } from "src/modules/utils/utils";

export class BaseService {



  consoleLog(...args: any[]) {
    console.log(getLine(), ...args);
  }

  consoleError(...args: any[]) {
    console.error(getLine(), ...args);
  }


 

}
