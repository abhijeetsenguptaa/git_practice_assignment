let num = 1221 ;

let arr =[];
arr.push(num);

let str = "";
str+=arr[0];         //"1221"

let rev = "";
for(i=str.length-1;i<=0;i++){
rev+=str[i];
}

if(str==rev){
console.log("It is Palindrome");
}else{
console.log("It is not Palindrome");
}

