import bcrypt from "bcryptjs";
const users = [
  {
    firstName: "Admin User",
    lastName: "Admin User",
    email: "admin@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    address: "Ibadan Oyo State",
  },
  {
    name: "Sammy Ajayi",
    email: "sammy@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
  {
    name: "mary Adeleke",
    email: "mary@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
];

export default users;
