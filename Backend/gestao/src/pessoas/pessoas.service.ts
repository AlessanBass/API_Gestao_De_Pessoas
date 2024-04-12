import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoasService {
  constructor(private readonly prisma :  PrismaService){}


  async create(createPessoaDto: CreatePessoaDto) {
    try {
      return this.prisma.pessoas.create({
        data:{
          nome: createPessoaDto.nome,
          email: createPessoaDto.email,
          telefone: createPessoaDto.telefone
        }
      });
    } catch (error) {
        throw new BadRequestException("Aconteceu algo errado");
    }
  }

  async findAll() {
    try {
      return this.prisma.pessoas.findMany();
    } catch (error) {
        throw new BadRequestException("Aconteceu algo errado");
    }
  }

  async findOne(id: number) {
    try {
      return this.prisma.pessoas.findUnique({
        where: {id_pessoa:id},
        include:{enderecos: true}
      });
    } catch (error) {
        throw new BadRequestException("Aconteceu algo errado");
    }
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    try{
      return this.prisma.pessoas.update({
        data:{
          nome : updatePessoaDto.nome,
          email: updatePessoaDto.email,
          telefone: updatePessoaDto.telefone
        },
        where:{id_pessoa: id}
      });
    }catch(erro){
      throw new BadRequestException("Usuario não encontrado!");
    }
  }

  async remove(id: number) {
    try {

      await this.prisma.enderecos.deleteMany({
        where:{pessoas_id_pessoa : id}
      })

      return this.prisma.pessoas.delete({
        where:{id_pessoa:id},
        include:{enderecos:true}
      });
    } catch (error) {
        throw new BadRequestException("Aconteceu algo errado");
    }
  }
}
