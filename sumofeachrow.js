
let m = 
[[10,20,30,40],
[30,20,40,70],
[59,48,38,23],
[45,34,23,78]]
sum=0
 for(i=0;i<m.length;i++){
    console.log(m[i])
    for(j=0;j<m[i].length;j++){
        sum=sum+m[j][i]
    }
    console.log(sum)
    sum=0
 }