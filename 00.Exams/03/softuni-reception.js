function solve(arr) {
    arr = arr.map(Number);
    let countStudents = arr[arr.length - 1];
  
    const answersPerHour = arr.slice(0, 3).reduce((x, y) => x + y, 0);
    let totalHours = 0;
  
    while (countStudents > 0) {
        totalHours++;

        if (totalHours % 4 === 0 && totalHours > 0) {
            continue;
        }
      
        countStudents -= answersPerHour;
    }
  
    console.log(`Time needed: ${totalHours}h.`);
  }