function sumZero(arrayFir){ 
    let answer = []; 
    if(arrayFir.length % 2 !== 1){ 
    answer = undefined; 
    return; 
    } 
    for(let a = 0; a < (arrayFir.length / 2) - 1 ; a++){ 
    if((arrayFir[a] + arrayFir[arrayFir.length-a-1]) === 0){ 
    answer.push(arrayFir[a], arrayFir[arrayFir.length-a-1] ); 
    return answer; 
    } 
    } 
    return answer; 
    } 
sumZero([-3, -2, -1, 0, 1, 2, 3]); 