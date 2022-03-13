//express를 사용한 node.js 웹서버 구축

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api 명시
//즉, http://localhost:4000/api/hello 경로로 접속하면 메세지를 받을 수 있게된다.
app.get("/api/hello", (req, res) => {
    res.send({message : 'Hello Express!'});
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
