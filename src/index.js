
exports.min = function min (array) {
    let min = 0; 
 for(let i = 0; i < array.length; i++)
    {
       min = Math.min.apply(null,array);
    }

return min;
}

exports.max = function max (array) {
    let max = 0;
for(let i = 0; i < array.length; i++)
    {
       max = Math.max.apply(null,array);
    }

return max;
}

exports.avg = function avg (array) {
    let sum = 0; 
    let avg = 0;
    for(let i = 0; i < array.length; i++)
        {
            sum += array[i];
            avg = sum/array.length;
        }
    }
    return avg;
}
