function uniqueCount(val){
  const init=0
  var count= {}
  val.map(word => {
    if (word in count){
      count[word]+=1
      }
    else{
      count[word]=1
    }
  })
 return count 
}
function newKey(val){
  var lenCount={}
  val.map(freqar=> {
    freqar.map(arr=> {
      lenCount[arr]=arr.length
    })
  })
  return lenCount
}
function byLength(val){ 
  var arr1=[]
  var arr2=[]
  val.map(freqar=> {
    arr1=[]
    freqar.map(arr=> {
      arr1.push(arr.length)
    })
    arr2.push(arr1)
  })
  return arr2
}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


x= "india is a small country and I will work towards making our country the better india"
var count=uniqueCount(x.split(" "))
var countvalue= Object.values(count)
countvalue.sort(function(a,b){return b-a})
var final= []
var temparr=[]
var temp=countvalue[0]
for (el of countvalue){
  var x=getKeyByValue(count, el)
   if(el==temp){
  if(final.length==0){
    final.unshift(x)
    }
  else{
    final.push(x) 
  }
   }
   else{
     temparr.push(final)
     final=[]
     final.push(x)
   }
  var temp=count[x]
  delete count[x]
}
temparr.push(final)
var something= byLength(temparr)
var newkey= newKey(temparr)
var insort= something.map(inar=>{
return inar.sort(function(a,b){return b-a})
})
var prettySorted=[]
for(ele in insort){
  for (i of insort[ele]){ 
    var x= getKeyByValue(newkey, i)
    console.log(x + ", ")
    delete newkey[x]
  }
}
