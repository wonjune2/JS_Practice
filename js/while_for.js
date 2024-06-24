let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while(j < 3);

for(let i = 0; i < 3; i++) {
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) continue;
    console.log(i);
}

let n = 10;

for(let i = 2; i <= n; i++) {
    let count = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j == 0) {
            count++;
        }
    }
    if(count == 2) {
        console.log(i);
    }
}