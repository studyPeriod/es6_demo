/**
 * Created by jsliu on 2017/11/14.
 */
{
    let add=(a,b)=>a+b;
    console.log(add(1,3));
    console.log(add(5,11));
    console.log("*************************");
}

{
    let add=(a,b=12)=>a+b;
    console.log(add(13));
    console.log(add(24,25));
    console.log("*************************");
}

{
    let test=(a,b="common!")=>{
        console.log(a+b+"rrrrrrrrrrrrrrrrrrrrr");
        return a+b;
};
    console.log(test("baby"));
    console.log("*************************");
}

{
    let json1={
        name:"liu",
        adress:"shangHai"
    };
    let json2={
        name:"liu"
    };
    let test=({name,adress="momey"})=>{
        console.log(name,adress);
    };
    test(json1);
    test(json2);
    console.log("*************************");
}

{
    let arr=["liu","jian","sheng"];
    let test=(...arg)=>{
        console.log(arg[0]);
        console.log(arg[1]);
        console.log(arg[2]);
    };
    test(...arr);
    console.log("*******dd******************");
}

{
    let json1={
        name:"liu",
        adress:"shangHai"
    };
    console.log("name" in json1);
    console.log("id" in json1);
    console.log("*************************");
}

{
    let arr1=["liu","jian","sheng"];
    let arr2=[,,,,,,];
    console.log(0 in arr1);
    console.log(0 in arr2);
    console.log("*************************");

}

{
    let arr1=["liu","jian",,"sheng"];
    console.log("************forEach*************");
    arr1.forEach((value,index)=>console.log(value," | ",index));
    console.log("*************filter************");
    arr1.filter(((x)=>console.log(x)));
    console.log("*************some************");
    arr1.some((x)=>console.log(x));
    console.log("*********map****************");
    arr1.map((x)=>console.log(x));
    console.log("*************************");
}

{
    let arr1=["liu","jian","sheng"];
    let str=arr1.join(" | ");
    let str2=arr1.toString();
    console.log("str is:",str);
    console.log("str2 is:",str2);
    console.log("*************************");
}