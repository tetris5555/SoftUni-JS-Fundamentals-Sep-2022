function solve(arr) {
    const targets = arr.shift().split(' ').map(Number);

    let countShotTargets = 0;
    let i = 0;
    while (arr[i] !== 'End') {
        const idx = Number(arr[i]);

        if (targets[idx] !== undefined) {
            const target = targets[idx];

            targets[idx] = -1;
            countShotTargets++;

            for (let j = 0; j < targets.length; j++) {
                if (targets[j] !== -1 && targets[j] > target) {
                    targets[j] -= target;
                    continue;
                }

                if (targets[j] !== -1 && targets[j] <= target) {
                    targets[j] += target;
                }
            }
        }

        i++;
    }
    console.log(`Shot targets: ${countShotTargets} -> ${targets.join(' ')}`);
}