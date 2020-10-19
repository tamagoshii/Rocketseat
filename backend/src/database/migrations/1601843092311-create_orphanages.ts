import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1601843092311 implements MigrationInterface {
  
  public async up(QueryRunner: QueryRunner): Promise<void> {
    //REALIZA ALTERAÇÔES
    // CRIAR TABELA, CRIAR UM NOV(O CAMPO, DELETAR ALGUM CAMPO
    await QueryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        }
      ]
    }))
  }

  public async dwon(QueryRunner: QueryRunner): Promise<void> {
    // DESFAZER O que foi feito no UP
    await QueryRunner.dropTable('orphanages')
  }
}