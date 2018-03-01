module.exports = function getZerosCount(number, base) {
  

    var i=2;
    var j=0;
    var zxc=1;
    var count=0;
    var counter = [];
    var z = 0;
    var arr =[];
    var abc =[];
    var results = [];

    while(i<base)
    {
        while(base%i == 0)
        {
                base=base/i;
                counter.push(i);
                arr.push(i);
        }
        i++;
    }

    if(base>1 && base != counter[counter.length-1])
    {
        counter.push(base);
            arr.push(base);
    }

    while(j<counter.length-1)
    {
        if (counter[j] == counter[j+1])
        {
            counter.splice(j,1);
            j=j-1;
        }
        j++;
    }

    function power(arr=[], counter)
    {
        var p = 0;
        var k=0;
        while(k<arr.length)
        {
            if(arr[k]==counter)
            {
                p++;
            }
            k++;
        }
        k=0;
        return p;
    }

    j=0;
    while(j<counter.length)
    {
        var p = power(arr,counter[j]);
        abc.push(p);
        j++;
    }

    j=0;
    while(j<counter.length)
    {
        z=counter[j];
        count=0;
        zxc =1;
        var qwerty = abc[j];
        while (Math.pow(z,zxc)<number)
        {
            count = count + Math.floor(number/Math.pow(z,zxc));
            zxc++;
        }
        count= Math.floor(count/qwerty);
        results.push(count);
        j++;
    }

    j=0;
    var result=results[0];
    while(j<results.length)
    {
        if(results[j]<result)
        {
            result = results[j];
        }
        j++;
    }

    return result; 
}
