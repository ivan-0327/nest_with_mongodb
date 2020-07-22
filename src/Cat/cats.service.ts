import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat.schema';
import {of} from 'rxjs';


@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    const createdCat =  await this.catModel.find().exec();
    return createdCat;
  }

  async findone(id:string): Promise<Cat> {
    let  CatData ;
    try{
        CatData =  await this.catModel.findById(id).exec();
    }catch{
        throw new NotFoundException('Could not find the Data !');
    }
   
       
   // return CatData;
    return CatData ;
  }
  async updateone(id :string ,name:string ,age :number ,breed :string ) {
    const updateData = await this.findone(id);
    if( name){
      updateData.name =name;
    }
    if(age){
      updateData.age=age;
    }
    if(breed){
      updateData.breed=breed;
    }
    updateData.save();
  }
  async deleteone(objectid:string){
  
     const resule= await this.catModel.deleteOne({_id:objectid}).exec();
     if(resule.n === 0){
        throw new NotFoundException('Could not find any Data to delete !' );
     }
  }
}
