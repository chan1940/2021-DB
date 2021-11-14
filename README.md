# 2021-DB
- 데이터베이스 설계

<br>

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:djhan65/2021-db
    - (token을 사용하는 경우) git clone https://github.com/pprotein/2021-db
2. week3 폴더로 이동    
    > cd week3
3. 콘솔창(powershell)에서 npm package설치
    > npm install
4. catabase/sql.js 에서 본인의 데이터베이스 정보입력(주석부분)
<pre>
<code>
const pool = mysql.createPool(
        process.env.JAWSDB)URL ?? {
            host: 'loclahost',
            user: 'root', //본인의 mysql user id
            database: 'db1', //본인이 만든 데이터베이스 이름
            password: '1111', //본인의 mysql password
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
);
</code>
</pre>

 <br>

 ## <span style="color:red">테이블 작성법</span>

- STUDENT table
 
 이름|과|전공|학번
 ---|---|---|---|
 김영희|정보통신공학과|정보통신|12201111|
 홍길동|컴퓨터공학과|데이터베이스|12191111|
 이순신|인공지능학과|인공지능|12181111|

 ## 텍스트 강조


<br>
<br>
<br>

## 8주차 실습
1. mysql database 생성
2. data update, 조회, 삽입 기능 추가
3. web에 구현


- **EMPLOYEE**
>Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
>---|---|---|---|---|---|---|---|---|---|
>한|2|대진|12171700|1997|수원|남|500|12171748|1|
>박|3|지은|12171711|1998|남양주|여|200|12171748|1|
>허|4|태민|12171722|1998|서울|남|400|NULL|2|
>유|5|수영|12171733|1998|이천|남|450|12171722|2|
>고|1|병찬|12171700|1997|분당|남|1000|NULL|1|


- **DEPARTMENT**
>Dname|Dnumber|Mgr_ssn|Mgr_start_date
>---|---|---|---|
>데이터|1|12171748|2017|
>개발|2|12171722|2020|
>전산|3|12171744|2018|



## 10주차 실습
8주차 실습에서 update 대신 delete 기능 추가
1. database 로그인, 조회 삭제 기능
2. admin / test 계정에 따라 다르게 로그인 후 기능 구현
3. web에 구현

- 기능
admin : 관리자 계정으로 로그인, 데이터 삭제 가능
test : 사용자로 로그인, 데이터만 조회 가능