import bcrypt from "bcryptjs";
const users = [
  {
    firstName: "Admin ",
    lastName: " Admin",
    email: "admin@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    address: "Ibadan Oyo State",
  },
  {
    firstName: "sammy ",
    lastName: " Ajayi",
    email: "sammy@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
  {
    firstName: "mayowa ",
    lastName: " Ajayi",
    email: "mary@example.com",
    phone: "07067820082",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    address: "Ibadan Oyo State",
  },
];

export default users;
