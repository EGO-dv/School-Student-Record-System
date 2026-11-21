const { createScore,getAllScores,getOneScore } = require("../controllers/scoreController")

const router = require("express").Router()

router.post("/score/:id",createScore)

router.get("/score",getAllScores)

router.get("/score/:scoreId",getOneScore)

module.exports= router;