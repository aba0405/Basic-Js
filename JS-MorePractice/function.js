function isEven(num){
   if(num % 2 == 0){
    console.log(num, ': is even number')
  }
  else{
    console.log(num*2, ': is odd number')
  }
}

function isEvenAll(nums){
  for(let i =0; i<nums.length; i++){
  const num = nums[i];
  isEven(num)
}}

nums = [5, 12, 89, 18, 8, 97]
isEvenAll(nums)


friends_age = [13,17,19,20,18];
isEvenAll(friends_age)