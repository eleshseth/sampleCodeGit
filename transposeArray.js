
let m = 
[[10,20,30],
[30,20,40],
[59,48,38],
]
let newm=[]
sum=0
 for(i=0;i<m.length;i++){
    newm[i]=[]
    console.log(m[i])
    for(j=0;j<m[i].length;j++){
       newm[i][j]=m[j][i]

    }
  
 }
 console.log(newm)
