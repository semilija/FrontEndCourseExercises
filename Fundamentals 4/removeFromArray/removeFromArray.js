const removeFromArray = function(arrDel, ...arrNums) {

    let arr = [];
    let flag = 0;
    for (var i=0; i < arrDel.length; i++){
        flag = 0;
        for (var j = 0; j<arrNums.length; j++){
            if (arrDel[i] === arrNums[j]){
                flag = 1;
                break;
            }
            flag=0;
        }
        if(flag == 0){
            arr.push(arrDel[i]);
        }
    }return arr
}


module.exports = removeFromArray