import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const data = {
    title: "Home",
  };
  res.render("index", data);
});

router.get("/page-2", async (req, res) => {
  const data = {
    title: "Page 2",
  };
  res.render("page-2", data);
});

router.get("/page-3", async (req, res) => {
  const data = {
    title: "Page 3",
  };
  res.render("page-3", data);
});

router.get("/page-4", async (req, res) => {
  const data = {
    title: "Page 4",
  };
  res.render("page-4", data);
});

export default router;
