//Question 1: codingScoreCheck
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject('Sorry you haven’t cleared the coding round.');
            }
        }, 2000);
    });
}

// Example usage
codingScoreCheck([85, 90, 78, 92], 80)
    .then(averageScore => console.log('Average Coding Score:', averageScore))
    .catch(error => console.log(error));

    //Question 2: HUKUMUScoreCheck
    function HUKUMUScoreCheck(marks, cutoff) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const averageScore = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
                if (averageScore >= cutoff) {
                    resolve(averageScore);
                } else {
                    reject('Sorry you haven’t cleared the HUKUMU round.');
                }
            }, 2000);
        });
    }
    
    // Example usage
    HUKUMUScoreCheck([70, 75, 80, 85], 75)
        .then(averageScore => console.log('Average HUKUMU Score:', averageScore))
        .catch(error => console.log(error));
//Question 3: unitMovementCheck
function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalAverage = (averageCodingScore + averageHukumuScore) / 2;
            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject('Sorry you haven’t cleared the final cutoff.');
            }
        }, 2000);
    });
}

// Example usage
unitMovementCheck(85, 80, 82)
    .then(finalAverage => console.log('Final Average Score:', finalAverage))
    .catch(error => console.log(error));
