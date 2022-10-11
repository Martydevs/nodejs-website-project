import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Inicio", content: "Inicio" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de", content: "Acerca de Mí" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contáctame" });
});

export default router;
