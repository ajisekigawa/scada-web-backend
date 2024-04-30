import express from "express";
import { getPerdetikhariini2jamterahir } from "../controllers/PerdetikController.js";

const router = express.Router();

router.get(
  "/perdetikhariini2jamterahir",
  getPerdetikhariini2jamterahir
);

export default router;
