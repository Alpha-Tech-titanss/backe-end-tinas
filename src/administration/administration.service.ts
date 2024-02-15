import { Injectable } from '@nestjs/common';
import { CreateAdministrationInput } from './dto/create-administration.input';
import { UpdateAdministrationInput } from './dto/update-administration.input';

@Injectable()
export class AdministrationService {
  create(createAdministrationInput: CreateAdministrationInput) {
    return 'This action adds a new administration';
  }

  findAll() {
    return `This action returns all administration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administration`;
  }

  update(id: number, updateAdministrationInput: UpdateAdministrationInput) {
    return `This action updates a #${id} administration`;
  }

  remove(id: number) {
    return `This action removes a #${id} administration`;
  }
}
