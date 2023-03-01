import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'demo', table: 'products'}}})
export class Products extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mysql: {columnName: 'productID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1},
  })
  productId?: number;

  @property({
    type: 'string',
    required: true,
    length: 3,
    generated: 0,
    mysql: {columnName: 'productCode', dataType: 'char', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N', generated: 0},
  })
  productCode: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: 0,
    mysql: {columnName: 'name', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N', generated: 0},
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mysql: {columnName: 'quantity', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 0},
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
    precision: 7,
    scale: 2,
    generated: 0,
    mysql: {columnName: 'price', dataType: 'decimal', dataLength: null, dataPrecision: 7, dataScale: 2, nullable: 'N', generated: 0},
  })
  price: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
