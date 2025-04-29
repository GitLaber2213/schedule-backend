import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BaseService<T> {
  protected entities: T[] = [];

  create(entity: T): T {
    this.entities.push(entity);
    return entity;
  }

  findAll(): T[] {
    return this.entities;
  }

  findOne(id: number): T {
    const entity = this.entities[id];
    if (!entity) {
      throw new NotFoundException('Entity not found');
    }
    return entity;
  }

  update(id: number, updatedEntity: T): T {
    const entity = this.findOne(id);
    this.entities[id] = updatedEntity;
    return updatedEntity;
  }

  remove(id: number): void {
    this.findOne(id);
    this.entities.splice(id, 1);
  }
}