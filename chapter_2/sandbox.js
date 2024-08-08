//break and continue

const scores = [50, 30, 24, 78, 68, 100];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 60) {
        continue;
    }
    console.log(`Score: ${scores[i]}`);
}