import app from "./app";
import mongoose from "mongoose"; 
import env from "./utils/validateEnv";

// 환경 변수에서 포트 번호를 가져와 유효성 검증후 `port` 변수에 할당
const port = env.PORT; 

// Mongoose를 사용해 환경변수에서 MONGO_CONNECTION_STRING을 가져와 유효성 검증 후 MongoDB에 연결 
mongoose.connect(env.MONGO_CONNECTION_STRING) 
    .then(() => {
        // MongoDB 연결이 성공한 경우 "Mongoose connected" 메시지를 콘솔에 출력
        console.log("Mongoose connected"); 
        
        // 서버가 지정된 포트에서 실행 중인 경우 "server running on port"와 포트 번호를 콘솔에 출력
        app.listen(port, () => {console.log("server running on port" + port); });
    })
    .catch(console.error);
