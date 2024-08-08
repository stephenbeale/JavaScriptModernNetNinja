//break and continue

const scores = [50, 30, 24, 78, 68, 100];

for (let i = 0; i < scores.length; i++) {
    console.log("your score is: " + scores[i]);
    
    if (scores[i] === 100) {
        console.log("congrats!");
        break;        
    }
    console.log(`Score: ${scores[i]}`);
}