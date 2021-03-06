const express = require("express");
const Article = require("../schemas/article");
const router = express.Router();



router.get("/", (req, res) => {
    res.send("this is root page")
    // res.sendFile(__dirname + "/index.html")
});


router.get("/article", async (req, res) => {
    const article = await Article.find();

    res.json({
        article,
    });
    // res.sendFile(__dirname + "/article.html")
});

// 상세페이지

router.get("/article/:articleId", async (req, res) => {
    const { articleId } = req.params;

    const [article] = await Article.find({ articleId: Number(articleId) });

    res.json({
        detail: article
    });
});

// 삭제하기
router.delete("/article/:articleId", async (req, res) => {
    const {articleId} = req.params;
    
    const removearticle = await Article.find({articleId : Number(articleId)});
    if (removearticle.length > 0) {
      await Article.deleteOne({articleId: Number(articleId)});
    }
    res.json({success: true});
  });
  
// 수정하기  
  router.put("/article/:articleId", async (req, res) => {
    const {articleId} = req.params;
    const {content} = req.body;

    const updatearticle = await Article.find({articleId : Number(articleId)});
    if (!updatearticle.length){
        return res.status(400).json({success: false, errorMessage: "게시글이 없습니다."})

    }
    await Article.updateOne({articleId: Number(articleId)}, {$set: {content}});

    res.json({success: true});
  });





//기록하기

router.post("/article", async (req, res) => {
    const { articleId, name, articlePw, date, title, content } = req.body;

    const article = await Article.find({ articleId });
    if (article.length) {
        return res
        .status(400)
        .json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdArticle = await Article.create({ articleId, name, articlePw, date, title, content });


    res.json({ article: createdArticle });
});
module.exports = router;