db.getCollection("bbs33").find({})

// 데이터 베이스 목록 조회
show dbs

//로컬데이터사용
use local

//현재사용중인 디비이름확인
db

//db는 있으면 스위치 없으면 생성 후 스위치임
use test

//test db의 인서트
db.test.insertOne({name : "uni"})
//모든 몽고DB 문서는 _id라는 특별핚 이름의 필드field를 가지는데, 이 필드는 문서가 DB에 저장될 때 자동으로 만들어 짐 
//ObjectId의 문자열 부분은 유닉스 시간 표기(4바이트) + 랜덤값(5바이트) + 카운트(3바이트)로 이루어 짐

//db삭제
db.dropDatabase()


//RDBMS의 테이블을 컬렉션이라고 함
//RDBMS의 레코드에 해당하는 한 건의 데이터를 문서(document)라고 함
//즉, 컬렉션이란 스키마 없이 자유롭게 작성된 여러 개의 문서를 보관하는 저장소

db
use test

//db의 새로운컬렉션 만들기
db.createCollection("user",{})

//현재 사용중인 db의 모든컬렉션 조회
db.getCollectionNames()

//컬렉션삭제
db.user.drop()

//띄어쓰기가 있는 경우 생성
db.createCollection("user multi",{})

//띄어쓰기가 있는 경우 삭제
db["user multi"].drop()

//구조[도큐먼트 - 컬렉션 - 데이터베이스]
//      row  - 테이블 - 데이터베이스

//컬렉션의 CRUD 메서드
//find
// insertOne, insertMany, findOne, find, updateOne, updateMany, deleteOne, deleteMany
//문서 생성 메서드 사용하기
//create 메서드로 생성하지 않아도 몽고 db는 스키마가 없기 때문에 이름.insertOne 형태 명령시 컬렉션 자동 생성

db.test.insertMany([{name : 'jenny', age : 22},{name : 'lisa', age:20}])

//검색
db.test.find({})

use shop

show collections

db.member.find({}).count()

use shop2
db
db.createUser({
user: "winner",
pwd: "1234",
roles: ["readWrite", "dbAdmin"]
})
show users
db.createCollection("memo")
db.getCollection("memo").find({})
db.getCollection("memo").count({})
db.getCollection("memo").stats()

db.memo.insertOne({'name' : 'apple','age' : 500})
db.memo.find({'name' : 'apple'})

// shop3 db만들고 member컬렉션 생성
use shop3
db.createCollection('member')
db.member.stats()
db.member.find({})
db.bbs.insert({'title' : 'win', 'content' : 'fun'})
db.member.insert({'id' : 'hong', 'pw' : '1234', 
                'name' : 'hong', 'tel' : '011'})
db.member.insertMany([
    {'id':'apple', 'pw':'1234','name':'apple', 'tel':'011'},
    {'id':'apple2', 'pw':'1234','name':'apple2', 'tel':'011'}                  
    ])
db.member.insertMany([
    {'id':'hong', 'pw':'2222','name':'hong', 'tel':'012'},
    {'id':'hong2', 'pw':'2222','name':'hong2', 'tel':'012'}                  
    ])
    
show collections
db.bbs.drop()

for(i=0; i<10; i++){
    db.member.insert({'test' : i})
}
db.member.find({})
cursor = db.member.find();
while (cursor.hasNext()) {
    printjson(cursor.next());
}

//id가 hong인것 조회
db.member.find({id : 'hong'})
//name 값이 hong 이고(, = and 조건) pw가 2222인것을  name과pw만 조회
db.member.find({name : 'hong', pw : '2222'} , {name : 1, pw : 1})
//(and 조건) document find()-논리/비교 연산자(복합적으로 사용 가능)
db.member.find({$and: [{name : 'hong'},{ pw : '2222'}] } , {name : 1, pw : 1})
//pw가 2222인것
db.member.find({pw : '2222'})
//pw가 2222이거나 name이 hong인것
db.member.find({$or: [{name : 'hong'}, {pw : '2222'}]})

//find(조건, 컬럼선택) - find() 메소드의 두 번째 파라미터로 들어가는 것이  projection
db.member.find({},{test : 1})

//3보다 큰거 gt 
db.member.find({test : {$gt : 3}})

//3초가 8미만
db.member.find({$and : [{test : {$gt : 3}}, {test : {$lt : 8}}]})

//document find()-조건검색($regex- option(i: 대소문자무시))
db.member.find({name:{ $regex : /^a/}}) // apple a로 시작하는것

//1건만 변경 - 젤 처음 하나만 변경되는건지 확인필요
db.member.updateOne({tel : '011'}, {$set : {tel : '000'}})

//모두변경
db.member.updateMany({tel : '011'}, {$set : {tel : '000'}})

db.member.find({},{tel : 1})

//test 6인것 삭제
db.member.find({},{test : 1})
db.member.deleteOne({'test' : 6})

//name이 hong인거 삭제
db.member.find({name : 'hong'})
db.member.deleteMany({name : 'hong'})

db.member.find()
db.member.deleteMany({})
db.member.count()

db.member.drop()
db.dropDatabase()

use shop2
db.memo.find({'office' : {$not : /busan/}}).limit(3)
//var memo_find_result = db.memo.find()
db.memo.find({name : 'Garry'})
db.memo.find({})
memo_find_result.limit(3)













