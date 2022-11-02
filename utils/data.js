import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "endra",
      email: "endrahorizon@gmail.com",
      password: bcrypt.hashSync("097236hie"),
      isAdmin: true,
    },
    {
      name: "gunawan",
      email: "gunawanhorizon@gmail.com",
      password: bcrypt.hashSync("324236hie"),
      isAdmin: true,
    },
  ],
};
