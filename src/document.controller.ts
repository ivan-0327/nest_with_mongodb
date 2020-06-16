import { Controller ,Get,Post ,Patch ,Delete ,Param ,Body ,Response,HttpStatus,UsePipes} from '@nestjs/common';
import { DocumentService } from './document/document.service';
import { DocumnetPipe } from './documnet.pipe';
import {CreateCatDto} from './create-document.dto';

@Controller('document')
export class DocumentController {
    constructor( private documnetService:DocumentService){}
    @Get()
    getAllDocuments(@Response() res ){
      this.documnetService.getDocumentData().subscribe( data =>{
          res.status(HttpStatus.OK).json(data);
      })
    }
/*
    @Get('/:id')
    getDocument(@Param() param ,@Response() res){
      let resData = data.filter(data =>data.id ===Number(param.id) );
      res.status(HttpStatus.OK).json(resData);
    }*/
    @Post()
    @UsePipes(DocumnetPipe)
    addDocument(@Response() res , @Body() document:CreateCatDto){
      this.documnetService.getDocumentData().subscribe( data =>{
        res.status(HttpStatus.CREATED).json(document);
      })
        
    }
    /*
    @Patch('/:id')
    updateDocument(@Param() params ,@Response() res ,@Body() document){
        res.status(HttpStatus.OK).json(document);
    }
    @Delete('/:id')
    deleteDocument(@Param() param, @Response() res) {
        // 做些什麼
        res.status(HttpStatus.OK).json(document);
    }*/
}
