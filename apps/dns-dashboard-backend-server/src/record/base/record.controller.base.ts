/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecordService } from "../record.service";
import { RecordCreateInput } from "./RecordCreateInput";
import { Record } from "./Record";
import { RecordFindManyArgs } from "./RecordFindManyArgs";
import { RecordWhereUniqueInput } from "./RecordWhereUniqueInput";
import { RecordUpdateInput } from "./RecordUpdateInput";

export class RecordControllerBase {
  constructor(protected readonly service: RecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Record })
  async createRecord(@common.Body() data: RecordCreateInput): Promise<Record> {
    return await this.service.createRecord({
      data: {
        ...data,

        domain: data.domain
          ? {
              connect: data.domain,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        domain: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Record] })
  @ApiNestedQuery(RecordFindManyArgs)
  async records(@common.Req() request: Request): Promise<Record[]> {
    const args = plainToClass(RecordFindManyArgs, request.query);
    return this.service.records({
      ...args,
      select: {
        createdAt: true,

        domain: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Record })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async record(
    @common.Param() params: RecordWhereUniqueInput
  ): Promise<Record | null> {
    const result = await this.service.record({
      where: params,
      select: {
        createdAt: true,

        domain: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Record })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecord(
    @common.Param() params: RecordWhereUniqueInput,
    @common.Body() data: RecordUpdateInput
  ): Promise<Record | null> {
    try {
      return await this.service.updateRecord({
        where: params,
        data: {
          ...data,

          domain: data.domain
            ? {
                connect: data.domain,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          domain: {
            select: {
              id: true,
            },
          },

          id: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Record })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecord(
    @common.Param() params: RecordWhereUniqueInput
  ): Promise<Record | null> {
    try {
      return await this.service.deleteRecord({
        where: params,
        select: {
          createdAt: true,

          domain: {
            select: {
              id: true,
            },
          },

          id: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
