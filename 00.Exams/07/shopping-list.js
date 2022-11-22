function shoppingList(commands){
    let arr = commands
                .shift()
                .split('!')
    commands.pop();

    for(let i = 0; i < commands.length; i++){
        let [command, grocery1, grocery2] = commands[i].split(' ');

        switch (command){
            case 'Urgent':
                if(!arr.includes(grocery1)){
                    arr.unshift(grocery1);
                }

                break;

            case 'Unnecessary':
                if(arr.includes(grocery1)) {
                    arr = arr.filter(x => x !== grocery1);
                }

                break;

            case 'Correct':
                if(arr.includes(grocery1)) {
                    arr = arr.map(x => x.replace(grocery1, grocery2));
                }

                break;
            case 'Rearrange':
                if(arr.includes(grocery1)) {
                    arr = arr.filter(x => x !== grocery1);
                    arr.push(grocery1);
                }
                
                break;
        }
    }
    console.log(arr.join(', '))
}