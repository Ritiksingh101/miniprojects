const express = require("express");
const router = express.Router();
const Kbc = require("../models/Kbc");

router.get("/", async (req, res) => {
  try {
    const kbc = await Kbc.find();
    res.status(200).json({
      data: kbc,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const kbc = await Kbc.findById(req.params.id);

    res.status(200).json({
      data: kbc,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const kbc = new Kbc(req.body);
    const newkbc = await kbc.save();

    res.status(200).json({
      data: newkbc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const kbc = await Kbc.findById(req.params.id);

    if (!kbc) {
      return res.status(400).json({ message: "Kbc does not exist" });
    }
    kbc.Title = req.body.Title || kbc.Title;
    kbc.Price = req.body.Price || kbc.Price;
    kbc.Disceiption = req.body.Disceiption || kbc.Disceiption;
    kbc.Quantite = req.body.Quantite || kbc.Quantite;
    kbc.Categories = req.body.Categories || kbc.Categories;
    kbc.Image = req.body.Image || kbc.Image;
  
    const updatedKbc = await kbc.save();

    res.status(200).json({
      data: updatedKbc,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Kbc.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Kbc is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
