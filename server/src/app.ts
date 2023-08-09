import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import createHttpError, { isHttpError } from "http-errors";
import "dotenv/config";
import env from "./utils/validateEnv";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import movieRoutes from "./routes/movie";
import contentRoutes from "./routes/content";

// express 시작
const app = express();

// 개발 환경에서 요청 로그를 출력
app.use(morgan("dev"));

// 요청의 본문을 JSON 형식으로 파싱
app.use(express.json());

// 세션 설정
app.use(
    session({
        secret: env.SESSION_SECRET, // 세션 암호화에 사용할 비밀 키
        resave: false, // 변경사항이 없을 경우 세션을 다시 저장하지 않음
        saveUninitialized: false, // 초기화되지 않은 세션을 저장소에 저장하지 않음
        cookie: { maxAge: 60 * 60 * 1000, }, // 세션의 유효 시간을 1시간(60분)으로 설정
        rolling: true, // 요청이 있을 때마다 세션의 유효 시간을 연장
        store: MongoStore.create({ mongoUrl: env.MONGO_CONNECTION_STRING, }), // MongoDB를 세션 저장소로 사용
    })
);

// "/api/auth" 경로에 대한 라우팅을 authRoutes 위임
app.use("/api/auth", authRoutes);

// "/api/user" 경로에 대한 라우팅을 userRoutes에 위임
app.use("/api/user", userRoutes);

// "/api/movie" 경로에 대한 라우팅을 movieRoutes 위임
app.use("/api/movie", movieRoutes);

// "/api/content" 경로에 대한 라우팅을 contentRoutes 위임
app.use("/api/content", contentRoutes);

// 존재하지 않는 엔드포인트에 대한 요청이 들어온 경우 404 에러
app.use((req, res, next) => { next(createHttpError(404, "Endpoint not found")); });

// 에러 핸들러
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error); // 에러를 콘솔에 출력
    let errorMessage = "An unknown error occurred"; // 기본 에러 메시지
    let statusCode = 500; // 기본 상태 코드
    
    // http-errors 모듈에서 생성된 에러인 경우
    if (isHttpError(error)) { 
        statusCode = error.status; // 에러의 상태 코드 가져옴
        errorMessage = error.message; // 에러의 메시지 가져옴
    }
    res.status(statusCode).json({ error: errorMessage }); // 상태 코드와 에러 메시지를 JSON 형식으로 응답
});

export default app;