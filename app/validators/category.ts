import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
  })
)

/**
 * Validates the post's update action
 */
export const updateCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
  })
)
