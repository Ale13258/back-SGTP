const { AES, enc } = require("crypto-ts");
const { User, Roll, Login } = require("../../models/Asociaciones");

const login_function = async (Name, Password) => {
  const { SECRETKEY } = process.env;
  
  try {
    const dataBd = await Login.findOne({
      where: {
        password: Password,
        user: Name,
      },
      include: [{ model: Roll, include: [{ model: User }] }],
    });

    return dataBd;
  } catch (error) {
    throw new Error("user not found" + error.original.code);
  }
};

const user_function = async (usuario) => {
  try {
    const dataBd = await User.findOne({
      where: {
        ID: usuario,
      },
    });

    return dataBd;
  } catch (error) {
    return "user not found";
  }
};

module.exports = {
  login_function,
  user_function,
};
