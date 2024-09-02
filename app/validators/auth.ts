import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3),
    email: vine.string().email().normalizeEmail().unique(async (db, value) => {
      const match = await db.from('users').select('id').where('email', value).first()
      return !match
    }),
    password: vine.string().minLength(8)
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8)
  })
)