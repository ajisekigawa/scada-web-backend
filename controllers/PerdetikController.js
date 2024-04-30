import Perdetik from "../models/PerdetikModel.js";
import { Op } from "sequelize";

export const getPerdetikhariini2jamterahir = async (req, res) => {
  try {
    const twoHoursAgo = new Date(Date.now() - 8 * 30 * 60 * 1000);
    const response = await Perdetik.findAll({
      where: {
        createdAt: {
          [Op.gt]: twoHoursAgo,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
