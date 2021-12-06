var arr = [0,0,0,1,1];
var c1 = 0;
var c2 = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        c1++;
    }else{
        c2++
    }
}

if(c1 == 0){
    console.log("-1");
} else{
    console.log(c2);
}