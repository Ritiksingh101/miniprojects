import React from 'react'

function Home() {

  // let arr = ["ram","mohan","ritik"]
  // arr[3]="jay"
  // arr.push(12)
  // arr.pop()
  // arr.shift()
  // arr.unshift("ram")

  // for( let x in arr){
  //   alert(x)
  // }


  // const sumInput = () => {
  //   let allNumber = []
  //   while (true) {
  //     let num = prompt("enter a number")
  //     if (Number(num)) {
  //       allNumber.push(num)
  //     }
  //     else {
  //       break
  //     }
  //   }
  //   let sum = 0
  //   for (let i of allNumber) {
  //     sum = sum + +i
      
  //   }
  //   return sum;
  // }


  // let arr=[1,5,4,9]
  // arr.splice(1,2)
  
  const camelize=(str)=>{
    let list=str.split("-")
    let newList= list.map((item, index)=> index==0 ? item : item[0].toUpperCase()+ item.slice(1)    )
    let result=newList.join("")
    return result
    
   
    
  }

  return (

    <div>
      {/* {Number("jay")} */}
      {/* {JSON.stringify(arr)} */}
      {camelize("list-style-image")}
    </div>
  )

}
export default Home