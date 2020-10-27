import { Router } from "express";
import user from "./resources/user";
import contact from "./resources/contact";

let router = Router();
// User Resource Routes
router.get("/user", user.findAll);
router.get("/user/:id", user.findOne);
router.post("/user", user.createOne);
router.put("/user/:id", user.updateOne);
router.delete("/user/:id", user.deleteOne);
router.post("/user/custom", user.customCreate);
/**
 * Below is an Example to demonstrate
 * How to call an auth or any middleware for a resource routes
 * `router.delete("/user/:id",[authMiddleWare] ,user.deleteOne);`
 * */
// Contact Resource Routes
router.get("/contact", contact.findAll);
router.get("/contact/:id", contact.findOne);
router.post("/contact", contact.createOne);
router.put("/contact/:id", contact.updateOne);
router.delete("/contact/:id", contact.deleteOne);
export default router;
