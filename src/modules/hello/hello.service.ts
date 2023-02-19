import { Injectable} from '@nestjs/common'

@Injectable()
export class HelloService{

    get(id): string {
        return 'sb ${id}';
    }
}
