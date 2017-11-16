/**
 * Created by jsliu on 2017/11/14.
 */
{
    let a="hello world";
    console.log("a is:",a);
}

{
    var b=3;
    {
        var b=4;
    }
    console.log("b is:",b);
}

{
    for(var i=0;i<3;i++){
        console.log("inner I is:",i);
    };
    console.log("outer I is:",i);
}

{
    for(let j=0;j<3;j++){
      console.log("innner j is:",j);
    };
    //console.log("outer j is:",j);
}

{
    const username="jsliu";
    //let username="jian";
    console.log("inner name is:",username);
}
console.log("outer name is:",username);
console.log("***********index.js end**************");