function totalLength(arr)
{
    let total = 0
    for(let i =0;i<arr.length;i++)
        {
            total += arr[i].length
            // console.log(`${arr[i].length} is ${total}`)
            
        }
    return total    
}
console.log(totalLength(["Reza", "sara", "Ali"]))
