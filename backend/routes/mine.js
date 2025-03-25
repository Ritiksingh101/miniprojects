const express = require("express");
const router = express.Router();
const Mine = require("../models/Mine");

router.get("/", async (req, res) => {
  try {
    const mine = await Mine.find();
    res.status(200).json({
      data: mine,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mine = await Mine.findById(req.params.id);

    res.status(200).json({
      data: mine,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const mine = new Mine(req.body);
    const newmine = await mine.save();

    res.status(200).json({
      data: newmine,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const mine = await Mine.findById(req.params.id);

    if (!mine) {
      return res.status(400).json({ message: "Mine does not exist" });
    }
    mine.amount = req.body.amount || mine.amount;
   
  
    const updatedMine = await mine.save();

    res.status(200).json({
      data: updatedMine,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Mine.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Mine is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
