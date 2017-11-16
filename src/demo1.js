/**
 * Created by jsliu on 2017/11/14.
 */
{
    let [a,b,c]=[1,2,3];
    console.log("a is:",a);
    console.log("b is:",b);
    console.log("c is:",c);
    console.log("*************************");
}

{
    let [a,[b,c],d]=[1,[2,3],4];
    console.log("a is:",a);
    console.log("b is:",b);
    console.log("c is:",c);
    console.log("d is:",d);
    console.log("*************************");
}

{
    let [a,b]=[1,2,3];
    console.log("a is:",a);
    console.log("b is:",b);
    console.log("*************************");
}

{
    let [a,b,c]=[1,2];
    console.log("a is:",a);
    console.log("b is:",b);
    console.log("c is:",c);
    console.log("*************************");
}

{
    let [username,telphone="138ccc"]=["jsliu"];
    console.log("username is:",username);
    console.log("telphone is:",telphone);
    console.log("*************************");
}

{
    let {header , footer}={header:"tianxian",footer:"chougui"};
    console.log(header+" | "+footer);
    console.log("*************************");
}

{
    let footer;
    ({footer}={footer:"aha!"});
    console.log("footer is:",footer);
    console.log("**************");
}

{
    const [a,b,c,d,e,f]="JSPangUserfull";
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log("*************************");
}
console.log("*********demo1.js end****************");