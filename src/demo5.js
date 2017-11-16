/**
 * Created by jsliu on 2017/11/15.
 */
{
    let name="liu";
    let country="china";
    let obj={name,country};
    console.log(obj);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let key="house";
    let obj={
        [key]:"internet"
    };
    console.log(obj);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let obj={
        add:(a,b)=>a+b
    }
    console.log(obj.add(3,4));
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let a={name:"liu"};
    let b={country:"china"};
    let c={city:"shangHai"};
    let obj=Object.assign(a,b,c);
    console.log(obj);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    var a = Symbol("liu");
    console.log(a);
    console.log(a.toString());
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let name=Symbol();
    let obj={
        [name]:"liujiansheng"
    };
    console.log(obj[name]);
    obj[name]="tingtingyuli";
    console.log(obj[name]);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let obj={name:"liu",adress:"china"};
    let age=Symbol();
     obj[age]=18;
     for(let item in obj){
         console.log(item);
         console.log(obj[item]);
         console.log("--------------------");
     }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let setArr=new Set(["liu","jian","sheng","liu"]);
    console.log(setArr);
    console.log("--------------------");
    setArr.add("china");
    console.log(setArr);
    console.log("--------------------");
    setArr.delete("liu");
    console.log(setArr);
    console.log("--------------------");
    console.log(setArr.has("sheng"));
    console.log("--------------------");
    setArr.clear();
    console.log(setArr);
    console.log("--------------------");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

{
    let setArr=new Set(["liu","jian","sheng","liu"]);
    for(let item of setArr){
        console.log(item);
        console.log("--------------------");
    }
    console.log(setArr.size);
    setArr.forEach((value)=>console.log(value));
}