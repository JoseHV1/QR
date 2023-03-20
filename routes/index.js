import express from "express";
import { renderViewGenerate, generateQR, renderViewRead } from "../controllers/qrController.js"
const router = express.Router();

router.get('/', renderViewGenerate);
router.post('/generate/qr', generateQR);
router.get('/read', renderViewRead);

export default router;