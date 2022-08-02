import express from "express";
import { edit, watching } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watching);
videoRouter.get("/edit", edit);

export default videoRouter;
