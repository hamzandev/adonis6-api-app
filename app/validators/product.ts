import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    price: vine.number(),
    category_id: vine.number().optional(),
    description: vine.string().trim().minLength(6).optional(),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    price: vine.number(),
    category_id: vine.number(),
    description: vine.string().trim().minLength(6).optional(),
  })
)