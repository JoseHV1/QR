import express from "express";
import { renderView, generateQR } from "../controllers/qrController.js"
const router = express.Router();

router.get('/', renderView);
router.post('/generate/qr', generateQR);

export default router;