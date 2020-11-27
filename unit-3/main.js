// alert("hello")
// console.log("hello")
//--Biến
// let hello = "hello reactJS";
// alert(hello);
//--Hằng
// const USERNAME="Black";
//--Khai báo mảng
// let arrStudent = ["Trần Thành Công","Vũ Đức Công"]
// console.log(arrStudent.length)
// console.log("length = " + arrStudent.length)
// -- Lấy phần tử trong mảng
// let arrStudent = ["Trần Thành Công","Vũ Đức Công"];
// console.log(arrStudent[0]);
// --Hàm
// 
// ---Contructer
// constructor(){
//     this.hello = this.hello.bind(this);
// }
// --allow function
hello = () =>{
    let a= 100+200;
    console.log(a);
}
hello();
let arr=["a","b","c","d","e","f","g","h","i","k"]
array = () => {
    console.log(arr.length);
}
array();
getArray = () => {
   console.log("Phần tử thứ 7 là : " + arr[7]);
}
getArray();
delArray = () => {
    arr.splice(5,1);
    console.log(arr);
 }
delArray();
array = [1,2,3,4,5];

const newArray =  array.map(x=>x*3);
console.log(newArray);
