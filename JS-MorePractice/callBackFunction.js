function explain_callback(name, age, task){
 console.log('Hello', name);
 console.log('your age', age)
 task()
}

function washHand(){
 console.log('wash your hand with soap')
}

function takeShower(){
 console.log('Take Shower')
}

function useSanitizer(){
 console.log('Just use sanitizer')
}

explain_callback('John Doe', 28, washHand)
explain_callback('John Eod', 17, takeShower)
explain_callback('David Messy', 21, useSanitizer)