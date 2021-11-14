// module은 import를 통해 불러올 수 있다.
import express from "express";
import logger from "morgan";
import path from "path";

//사용자가 만든 폴더에 있는 기능 불러오기
// (현재 파일 위치 기준으로 경로 작성)
//.js 쓰지 않아도 js파일임을 인식하기 때문에 안써도 됨.
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

//port number, 수정가능하지만 변하지 않는 값이기에 const사용
const PORT = 3000;

//app이라는 객체를 만들어서 express 활용
const app = express();
//app에는 엄청 많은 기능이 있다.
//주석 달 필요 X
//데이터 다루기 편하게 사용하는 것
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//웹 화면에 어떤 형식의 파일을 띄울건지 알려주는 코드
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(logger("dev"));

//라우터 주소
app.use("/", homeRouter);
// 그냥 /는 home을 의미
app.use("/update", updateRouter);
//이 주소에 해당하는 화면 추가
app.use("/select", selectRouter);
//이 줏에 해당하는 화면을 보여줌
app.listen(PORT, () => {
  //listen해서 서버를 실행시키는 것이다.
  //route선언 다 하고 마지막에 해줘야함.
  console.log(`Example app listending at http://localhost:${PORT}`);
});
//그 후, npm run start를 하면 실행된다.