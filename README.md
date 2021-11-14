# 2021-DB
- 데이터베이스 설계

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:chan1940/2021-DB.git
2. week3 폴더로 이동    
    > cd week3
3. 콘솔창(powershell)에서 npm package설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보입력(주석부분)
<pre>
<code>
const pool = mysql.createPool(
        process.env.JAWSDB)URL ?? {
            host: 'loclahost',
            user: 'root', //본인의 mysql user id
            database: 'tutorial', //본인이 만든 데이터베이스 이름
            password: 'password', //본인의 mysql password
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
);
</code>
</pre>

 <br>

 ## <span style="color:red">테이블 작성법</span>

 이름|과|전공|학번
 ---|---|---|---|
 김영희|정보통신공학과|정보통신|12201111|
 홍길동|컴퓨터공학과|데이터베이스|12191111|
 이순신|인공지능학과|인공지능|12181111|

 ## 텍스트 강조



## 3주차 실습
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:chan1940/2021-DB.git
2. week3 폴더로 이동    
    > cd week_3
3. 콘솔창(powershell)에서 npm package설치
    > npm install
4. database/sql.js에서 mysql database와 연결
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'db1',
    password: '1111',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>

 <br>

 ## <span style="color:red">STUDENT table</span>

***
>name|StudentNumber|Major|grade|admissionDate|email
>---|---|---|---|---|---|
>KO|12171748|정통|3|2021-09-26|12171748@inha.edu
>Park|12181218|전기|2|2018-02-28|12121218@inha.edu
>Han|12191219|의예|2|2019-03-01|12191219@inha.edu
>Kim|12201220|패디|2|2020-02-28|12201220@inha.edu
***

 ## 텍스트 강조

<br>

## 8주차 실습
 1. week8 폴더로 이동    
    > cd week8
 2. 콘솔창(powershell)에서 npm package설치
    > npm install
 3. database/sql.js에서 mysql database와 연결
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "1111",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
</code>
</pre>
## 4. 삽입, 조회, 업데이트 세 가지 기능 구현
<br>
삽입 기능
routes/home.js
<br>
조회 기능
routes/select.js
<br>
업데이트 기능
routes/update.js
<br>
<br>

 ## <span style="color:red">EMPLOYEE table</span>
>Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
>---|---|---|---|---|---|---|---|---|---|
>한|2|대진|12171700|1997|수원|남|500|12171748|1|
>박|3|지은|12171711|1998|남양주|여|200|12171748|1|
>허|4|태민|12171722|1998|서울|남|400|NULL|2|
>유|5|수영|12171733|1998|이천|남|450|12171722|2|
>고|1|병찬|12171700|1997|분당|남|1000|NULL|1|


 ## <span style="color:red">DEPARTMENT table</span>
>Dname|Dnumber|Mgr_ssn|Mgr_start_date
>---|---|---|---|
>데이터|1|12171748|2017|
>개발|2|12171722|2020|
>전산|3|12171744|2018|

<br>
## 10주차 실습
 1. week10 폴더로 이동    
    > cd week10
 2. 콘솔창(powershell)에서 npm package설치
    > npm install
 3. database/sql.js에서 mysql database와 연결
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week10",
    password: "1111",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
</code>
</pre>
## 4. 조회, 로그인, 삭제 세 가지 기능 구현
<br>
 
- 로그인 기능
routes/login.js
<br>
admin : 관리자 계정으로 로그인, 데이터 삭제 가능
<br> 
test : 사용자로 로그인, 데이터만 조회 가능
<br>

- 조회 기능
routes/select.js
<br>

- 삭제 기능
routes/delete.js
<br>
<br>


 ## <span style="color:red">DEPARTMENT table</span>
>Dname|Dnumber
>---|---|
>정보통신공학과|0
>컴퓨터공학과|1
>전기공학과|2
>전자공학과|3


 ## <span style="color:red">COURSE table</span>
>Course_Name|Course_Number|Credit_Hours
>---|---|---|
>데이터베이스설계|1|4
>알고리즘설계|2|4
>자료구조론|3|3
>정보보호론|4|3
>시스템프로그래밍|5|3

 ## <span style="color:red">USER table</span>
>Id|Password|Role
>---|---|---|
>admin|admin1234|admin
>test|test1234|users