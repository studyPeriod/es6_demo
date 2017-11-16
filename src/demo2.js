/**
 * Created by jsliu on 2017/11/14.
 */
function test(...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
    console.log(args[4]);
    console.log("*****************************");
}
test(1,11,111,11111);
test(2,22,222,2222,222222,333);


{
    let  arr1=["liu","jian","sheng"];
    let arr2=arr1;
    console.log("arr2 is：",arr2);
    arr2.push("ok");
    console.log("arr1 is:",arr1);
    console.log("arr2 is:",arr2);
    console.log("*****************************");
}

{
    let  arr1=["liu","jian","sheng"];
    let arr2=[...arr1];
    console.log("arr2 is：",arr2);
    arr2.push("ok");
    console.log("arr1 is:",arr1);
    console.log("arr2 is:",arr2);
    console.log("*****************************");
}

function test2(first,...arg){
    console.log("arg.lenght is:",arg.length);
    for(let val of arg){
        console.log(val)
    }
    console.log("*****************************");
};
test2('a','b','c','d','e','f','g','h');
console.log("*****************************");

{
    let a="jsliu";
    let b=`<p>11月13日，中共中央总书记、国家主席${a}在万象国家主席府同老挝人民革命党中央委员会总书记</p>、<p>国家主席本扬举行会谈。这是会谈前，本扬在主席府广场为习近平举行隆重欢迎仪式。 新华社记者 马占成</p>`;
  console.log(b);
  document.write(b);
    console.log("*****************************");
}

{
    let a="习近平";
    let b=12;
    let c=13;
    let d=`11月13日，中共中央总书记、国家主席习近平在万象国${b+c}家主席府同老挝人民革命党中央委员会总书记`;
    let e="总书记";
    console.log(d);
    console.log(d.includes(a));
    console.log("start",d.startsWith(e));
    console.log("end",d.endsWith(e));
    document.write(d);
    console.log("*****************************");
}

{
    document.write("jsliu have a lot of money | <br>".repeat(6));
}