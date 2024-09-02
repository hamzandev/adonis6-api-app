import { BaseModel, column, beforeCreate, belongsTo } from "@adonisjs/lucid/orm";
import { randomUUID } from "node:crypto";
import { DateTime } from "luxon";
import Category from "#models/category"
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class Product extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({isPrimary: true})
  declare id: string

  @column()
  declare name: string;

  @column()
  declare price: number;

  @column()
  declare description?: string

  @column()
  declare categoryId?: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(product: Product) {
    product.id = randomUUID()
  }

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>
}
