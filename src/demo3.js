/**
 * Created by jsliu on 2017/11/14.
 */
{
    let a=Math.random();
    console.log("a is number?: ",Number.isFinite(a));
    console.log("jsliu is number: ",Number.isFinite("jsliu"));
    console.log("undefined is number: ",Number.isFinite(undefined));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let a='9.98';
    console.log(Number.parseInt(a));
    console.log(Number.parseFloat(a));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let json={
        '0':"liu",
        "1":"jian",
        "2":"sheng",
        length:3
    }
    let arr=Array.from(json);
    console.log("arr is:",arr);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=Array.of('liu',"mu","yao");
    console.log("arr is:",arr);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=[1,2,3,4,5,6,7,8,9,0];
    let info =arr.find(function(value,index,arr){
       return value>7;
    });
    let ind=arr.findIndex(function(value,index,arr){
        return value>7;
    });
    console.log("info is:",info);
    console.log("ind is:",ind);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=[1,2,3,4,5,6,7,8,9,0];
    arr.fill("jsliu",5,7);
    console.log("arr is:",arr);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=["liu","jian","sheng","need","money"];
    for(let item of arr){
        console.log("value is:",item);
    }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=["liu","jian","sheng","need","money"];
    for(let index of arr.keys()){
        console.log("index is:",index);
    }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=["liu","jian","sheng","need","money"];
    for(let [index,value] of arr.entries()){
        console.log("value is:",value);
        console.log("index is:",index);
    }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let arr=["liu","jian","sheng","need","money"];
    let list=arr.entries();
    console.log(list.next().value);
    console.log(list.next().value);
    console.log(list.next().value);
    console.log(list.next().value);
    console.log(list.next().value);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}