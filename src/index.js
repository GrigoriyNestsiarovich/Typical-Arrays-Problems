
exports.min = function min (array) {
 for(let i = 0; i < array.length; i++)
    {
       min = Math.min.apply(null,arr);
    }

return min;
}

exports.max = function max (array) {
for(let i = 0; i < array.length; i++)
    {
       max = Math.max.apply(null,arr);
    }

return max;
}

exports.avg = function avg (array) {
for(let i = 0; i < array.length; i++)
    {
        if(array.length == 0){
            sum += arr[i];
            avg = sum/arr.length;
        }
        else{
            return 0;
        }

    }
    return avg;
}
