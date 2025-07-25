import z from 'zod'

export const SignInSchema = z.object({
  email: z.email({
    message: 'Invalid email',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .max(100, {
      message: 'Password cannot exceed 100 characters',
    }),
})

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters',
    })
    .max(30, {
      message: 'Username cannot exceed 30 characters',
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Username can only contain letters, numbers and underscores',
    }),
  name: z
    .string()
    .min(1, {
      message: 'Name is required',
    })
    .max(50, {
      message: 'Name cannot exceed 50 characters',
    })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Username can only contain letters, and spaces',
    }),
  email: z.email({
    message: 'Invalid email',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .max(100, {
      message: 'Password cannot exceed 100 characters',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[0-9]/, {
      message: 'Password must contain at least one number',
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Password must contain at least one special character',
    }),
})
