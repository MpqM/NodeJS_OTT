# OTT
#### ⚪ About Project
* ##### 넷플릭스 같은 OTT 서비스, 세션을 이용한 유저 인증, Express 기반 REST API 설계
* ##### React, NodeJs, Express, MongoDB, TypeScript를 사용해 OTT서비스 앱 구축

- - -

#### ⚪ Running Screen || Video
<p align ="center">
  <a href="https://www.youtube.com/watch?v=Kf4-rXis8qU&t=2s"><img src ="https://img.shields.io/badge/youtube-FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"/></a>
  </br>
  <img width="900" height="500" src="https://user-images.githubusercontent.com/79093184/259308302-5737a3ca-0587-4648-916a-88bf5ccc356d.png">
</p>

- - -

#### ⚪ Built With
<p align ="center">
   <img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img alt="typescript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/> <img alt="typescript" src ="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-339933.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="nodedotjs" src ="https://img.shields.io/badge/nodejs-339933.svg?&style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="mongodb" src ="https://img.shields.io/badge/mongodb-339933.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

- - -

#### ⚪ Getting Started
```bash
# Prerequisites: npm, node, MongoDB Connection URL
# execution
git clone https://github.com/MpqM/WebApp_OTT.git
# backend
cd server
# Change the MONGO_CONNECTION_STRING value in the server/.env file with yours
npm install
npm start
# frontend
cd client
npm install
npm start
```

- - -

#### ⚪ Description 
* ##### User
    * ##### 회원가입, 로그인, 로그아웃, 인증정보가져오기, 삭제, 수정, 조회, 전체조회, 쿼리를 통한 월별 유저 가입수 통계
    * ##### 세션 인증 방식을 이용한 사용자 인증 + 로그인, 로그아웃, 회원가입, NAVBAR에서 사용자 이름, 프로필 사진 출력
    * ##### react-hook을 이용한 커스텀 유효성검증 로그인, 회원가입용 Form 객체 구현
    * ##### react-router-dom 이용해 라우팅 구현, 삼항연산자 조건식을 사용해 사용자 인증시에만 서비스 이용가능하게 만듬
* ##### Content
   * ##### 삭제, 생성, 쿼리(type & genre)를 통한 조회 기능
   * ##### 넷플릭스의 슬라이드를 구현하기 위해 Movie를 타입 + 장르별로 배열로 만들어 저장
   * ##### 프론트엔드에서 이중배열로 데이터가 API호출이 나와서 자식배열의 MovieId를 추출하는 로직 구현
   * ##### 장르가 선택되지 않으면 셔플 알고리즘을 통해 가지고 있는 모든 영화를 무작위로 배열
* ##### Movie
    * ##### 삭제, 작성, 수정, 쿼리를 통한 조회($type, $name)
    * ##### 캐러셀을 이용한 Movie 슬라이더 생성

- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

