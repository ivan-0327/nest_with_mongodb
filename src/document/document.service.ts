import { Injectable } from '@nestjs/common';
import {of} from 'rxjs';
@Injectable()
export class DocumentService {
     data = [
        {
            name: '存有與虛無',
            phone: '4144',
            id: 1
        },
        {
            name: '單子論',
            phone: '1111',
            id: 2
        },
        {
            name: '物不遷論',
            phone: '0111',
            id: 3
        },
        {
            name: '道德經',
            phone: '0975',
            id: 4
        }
    ]
//of 是RXJS建立可被觀察者的方法之一，可以將裡面的參數轉換成可被觀察者
    getDocumentData(){
        return of(this.data)
    }
};
