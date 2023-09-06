import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const data = {
    title: "Home",
  };
  res.render("index", data);
});

router.get("/car", async (req, res) => {
  const data = {
    title: "Займ под залог автомобиля",
  };
  res.render("car", data);
});
router.get("/pts", async (req, res) => {
  const data = {
    title: "Займ под залог птс",
  };
  res.render("pts", data);
});
router.get("/truck", async (req, res) => {
  const data = {
    title: "Займ под залог грузовых авто",
  };
  res.render("truck", data);
});
router.get("/water-equipment", async (req, res) => {
  const data = {
    title: "Займ под залог водной техники",
  };
  res.render("water-equipment", data);
});
router.get("/refinancing", async (req, res) => {
  const data = {
    title: "Рефинансирование",
  };
  res.render("refinancing", data);
});
router.get("/about", async (req, res) => {
  const data = {
    title: "О нас",
  };
  res.render("about", data);
});
router.get("/clients", async (req, res) => {
  const data = {
    title: "Клиентам",
  };
  res.render("clients", data);
});

export default router;
