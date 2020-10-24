import { Router } from "express";
import user from "./controllers/user";
import contact from "./controllers/contact";

let router = Router();
// User Routes
router.get("/user", user.findOne);
router.post("/user", user.createOne);
router.put("/user", user.updateOne);
router.delete("/user", user.deleteOne);
router.post("/user/custom", user.customCreate);
// Contact Routes
router.get("/contact", contact.findOne);
router.post("/contact", contact.createOne);
router.put("/contact", contact.updateOne);
router.delete("/contact", contact.deleteOne);

export default router;
