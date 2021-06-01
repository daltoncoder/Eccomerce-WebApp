import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Butt Buttman',
    email: 'Horsecock@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Stamos',
    email: 'GreekGod@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
