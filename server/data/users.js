import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    address: "Ibadan Oyo State",
  },
  {
    name: "Sammy Ajayi",
    email: "sammy@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
  {
    name: "mary Adeleke",
    email: "mary@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
];

export default users;
