const express = require('express')
const router = express.Router()
const { Likes } = require('../models');
const {validateToken} = require("../middlewares/AuthMiddleware")
router.post("/", validateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({ where: { postId: PostId, UserId: UserId}, // Helps check if user has liked post
});

if(!found){ // if user has liked the post
  await Likes.create({PostId: PostId, UserId: UserId})
  res.json({ liked: true }); //How you know in the front end whether you are liking or un-liking the post
} else{
    await Likes.destroy({
        where: {
            PostId: PostId, UserId: UserId
        },
    })
    res.json({ liked: false });
}

});

module.exports = router;