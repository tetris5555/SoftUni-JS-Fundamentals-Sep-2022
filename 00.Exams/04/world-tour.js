function solve(arr) {
    let stops = arr.shift();
    arr.pop();
    let temp = [];

    const reAddStop = /Add Stop:\s*(?<idx>\d+)\s*:\s*(?<string>\w+)/;
    const reRemoveStop = /Remove Stop:\s*(?<start>\d+)\s*:\s*(?<end>\d+)/;
    const reSwitch = /Switch:\s*(?<fromPlace>\w+)\s*:\s*(?<toPlace>\w+)/;

    for (const line of arr) {
        if (reAddStop.test(line)) {
            let {idx, string} = line.match(reAddStop).groups;
            idx = Number(idx);

            if (stops.charAt(idx)) {
                temp = [...stops];
                temp.splice(idx, 0, string);
                stops = temp.join('');
            }
            console.log(stops);
        }
        else if (reRemoveStop.test(line)) {
            let {start, end} = line.match(reRemoveStop).groups;
            start = Number(start);
            end = Number(end);

            if (stops.charAt(start) && stops.charAt(end)) {
                temp = [...stops] ;
                temp.splice(start, (end - start + 1));
                stops = temp.join('');
            }
            console.log(stops);
        }
      	else if (reSwitch.test(line)) {
            const {fromPlace, toPlace} = line.match(reSwitch).groups;

            if (stops.includes(fromPlace)) {
                stops = stops.replace(new RegExp(`${fromPlace}`), () => toPlace);
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}