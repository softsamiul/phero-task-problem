function vaxTrail(arr) {
    const  A=[],B= [],C= [],D=[];
    
    for (const element of arr) {
        if ((element.age >= 20 && element.age <= 30) && element.temperature < 100) {
            A.push(element)
        }
        if ((element.age >= 31 && element.age <= 40) && element.temperature < 100) {
            B.push(element)
        }
         if ((element.age >= 41 && element.age <= 50) && element.temperature < 100) {
           C.push(element)
        }
        if (element.age > 0 && element.temperature >= 100) {
            D.push(element)
        }
    }
    
   sortingArr([A,B,C,D])
    return {A,B,C,D};
}

function sortingArr(arr){
  for (let props of arr){
      props =props.sort(function (a, b) {

           return (a.age % 2) - (b.age % 2) || (a - b)


         })
       
     }

}


const result = vaxTrail(
    [
        { name: 'sunil', age: 21, temperature: 98 },
        { name: 'Biplap', age: 22, temperature: 98 },
        { name: 'Kabir', age: 36, temperature: 99 },
        { name: 'Paul', age: 42, temperature: 98 },
        { name: 'Rahul', age: 37, temperature: 99 },
        { name: 'Kat', age: 41, temperature: 98 },
        { name: 'Nayeem', age: 50, temperature: 100 },
        { name: 'Sabnaj', age: 51, temperature: 101 },

    ]
)


console.log(result)