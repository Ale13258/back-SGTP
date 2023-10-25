const User = require("../Plataforma/models/UserModel");
const Roll = require("../Plataforma/models/RollModel");
const Login = require("../Plataforma/models/LoginModel");


// Definir la relación uno a uno (hasOne) entre User y Roll
User.hasOne(Roll, { foreignKey: "userId" });
Roll.belongsTo(User, { foreignKey: "userId" });

Roll.hasOne(Login, { foreignKey: "rollId" });
Login.belongsTo(Roll, { foreignKey: "rollId" });



// Exportar los modelos y las asociaciones
module.exports = {
  User,
  Roll,
  Login
};
