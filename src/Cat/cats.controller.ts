import { Controller ,Get,Post ,Patch ,Delete ,Param ,Body ,Response,HttpStatus,UsePipes} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor( private documnetService:CatsService){}
    
    @Get()
    async  getAllDocuments(@Response() res ){
      const Cat = await this.documnetService.findAll() ;
      console.log(Cat);
      return res.json(Cat);
    }

    @Get('/:id')
    async getDocument(@Param() param ,@Response() res){
      const Cat = await this.documnetService.findone(param.id) ;
      return res.json(Cat);
    }

    @Post()
   // @UsePipes(DocumnetPipe)
    addDocument(){
      this.documnetService.create({neme:'123',age:123,breed:'練習'});   
    }
    
    @Patch('/:id')
    async updateDocument(@Param() params ,@Response() res ,@Body() document){           
      const Cat = await this.documnetService.updateone(params.id, document.name , document.age ,document.breed ) ;
      return  res.status(HttpStatus.OK).json(Cat);           
    }
    
    @Delete('/:id')
    async deleteDocument(@Param() param) {
        // 做些什麼
        const Cat =  await this.documnetService.deleteone(param.id);      
    }
}
