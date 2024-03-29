import express from "express";

import {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/room.controller.js";

const router = express.Router();

router.route("/").get(getAllRooms);
router.route("/:id").get(getRoomById);
router.route("/").post(createRoom);
router.route("/:id").put(updateRoom);
router.route("/:id").delete(deleteRoom);

export default router;
