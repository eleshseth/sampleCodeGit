
let m = 
[[10,20,30],
[30,20,40],
[59,48,38],
]
sum=0
 for(i=0;i<m.length;i++){
    console.log(m[i])
    for(j=0;j<m[i].length;j++){
        if(i+j==m.length-1){
        sum=sum+m[i][j]
    }
    }
   
 }
 console.log(sum)
