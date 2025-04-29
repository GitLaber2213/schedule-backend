import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) { }

  @Get('')
  getAll() {
    return this.groupsService.getAll();
  }

  @Get(':id')
  getById(@Param("id") id: string) {

    return this.groupsService.getById(parseInt(id));
  }

  @Post('')
  create(@Body() entity: CreateGroupDto) {
    return this.groupsService.create(entity);
  }

  @Put(':id')
  update(@Body() entity: UpdateGroupDto, @Param("id") id: string) {
    return this.groupsService.update(parseInt(id), entity);
  }

  @Delete(':id')
  delete (@Param("id") id: string) {
    return this.groupsService.delete(parseInt(id));
  }

  @Delete()
  deleteMany(@Body() ids: string[]) {
    const parseIntIds = ids.map(id => parseInt(id));
    return this.groupsService.deleteMany(parseIntIds);
  }
}
