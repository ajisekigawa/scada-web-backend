import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Perdetik = db.define('perdetik_control_room',{
    pv: DataTypes.DOUBLE,
 
},{
    freezeTableName:true
});
 
export default Perdetik;
 
(async()=>{
    await db.sync();
})();