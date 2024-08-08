//break and continue

const scores = [50, 30, 24, 0, 78, 0, 0, 68, 100];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
     //ignore rest of code inside block but still goes through for each
        continue;
    }   
    
    console.log("your score is: " + scores[i]);   
    
    if (scores[i] === 100) {
        console.log("congrats!");
        break;        
    }    
}