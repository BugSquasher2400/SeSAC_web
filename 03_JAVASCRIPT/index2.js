// 자료형의 종류
// string, number, boolan, null, undefind
// object객체, array, 

//1.string

let myName = "엘리";
let email = "allie@nave.com";
console.log(myName);
console.log(email);

// 문자와 변수를 동시에 써보기
console.log('내 이름은', myName);
let aaa = '내 이름은'+myName+'이고, 이메일은'+email+'입니다';
let bbb = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`
console.log(aaa);
console.log(bbb);

// 2. number
let number = 123;
let opacity = 0.7;

console.log(number);
console.log(opacity);

console.log(number + opacity);

console.log("apple"-3); // Not a Number

// 3. boolean true, fasle
let cheak = true;
let isShow = false;

console.log(cheak);
console.log(isShow);

// 4. undefiend 값이 없는상태

let undef;
let obj = {
    abc:123
}
console.log(undef);
console.log(obj.abc);
console.log(obj.efg);

// 5. Null, 빈값 타입이 없는 상태
let empty = null;
console.log(empty);

// array 배열
let fruits = ["orange","apple","banana","mango"];
let fruits2 = new Array("orange","apple","banana","mango");

console.log(fruits[3]);
console.log(fruits2[1]);

// 여러 데이터타입을 하나의 배열에 넣을 수 있음
let data = [1, number, number, "string", 100];
console.log(data[3],data[2]);

// 2차원 배열
let korean = [["가","갸","거","겨"],
            ["나","냐","너","녀"],
            ["다","댜","더","뎌"]];

// console.log(korean[2][0])


// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2]);


const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1]);


// object 타입
// key: 값 의 쌍으로 이루어져 있음
let cat = {
    name:'나비',
    age:1,
    gender:'F',
    isCute:true
}

console.log(cat.name);
cat.like = ['참치','쥐']

// 접근방법 2 대괄호 접근법
console.log(cat["name"]);

cat["parent"] = "초롱이";
console.log(cat);

// 자료형 확인
console.log('---------------')

let und;
console.log(typeof "문자")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof {}) //obj
console.log(typeof [123]) //obj
console.log(typeof null) //obj
console.log(typeof und) //obj
console.log(typeof NaN) //obj
console.log(typeof function(){})