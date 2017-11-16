/**
 * Created by jsliu on 2017/11/15.
 */

{
    let json = {
        name: "liu",
        age: 18
    };
    var map = new Map();
    map.set("userInfo", json);
    console.log(map);
    console.log("*******************************************");
}

{
    let json = {
        name: "liu",
        age: 18
    };
    var map = new Map();
    map.set("userInfo", json);
    map.set("type", "mapData");
    map.set("time", "2017/09/09");
    console.log("map is:", map);
    console.log(map.get("userInfo"));
    console.log("----------------------------------------------");
    console.log(map.has("time"));
    console.log(map.size);
    console.log("----------------------------------------------");
    console.log(map.delete("type"));
    console.log("map is:", map);
    console.log("----------------------------------------------");
    console.log(map.clear());
    console.log("map is:", map);
    console.log("*******************************************");
}

{
    let obj = {
        add: (a, b = 10) => a + b,
        name: "liu"
    };
    console.log(obj.add(12));
    console.log(obj.add(12, 13));
    console.log("*******************************************");
}

{
    let obj = new Proxy({
        add: (a, b = 10) => a + b,
        name: "liu"
    }, {
        get: (target, key, reciver) => {
            console.log(`come in get: ${key}`);
            return target[key];
        }
    });
    console.log(obj.name);
    console.log(obj.add(23, 32));
    console.log("*******************************************");
}

{
    let hander = {
        add: (a, b = 13) => a + b,
        name: "liu jian sheng"
    };
    let footer = {
        get: (target, key, reciver) => {
            if (key == "name")
                return 'hello ' + target[key];
            else if (key == "add")
                return target[key];
        }
    };
    let obj = new Proxy(hander, footer);
    console.log(obj.name);
    console.log(obj.add(12));
    console.log("*******************************************");
}

{
    let header = {
        add: (a, b = 13) => a * b,
        name: "liu jian sheng"
    };
    let footer = {
        get: (target, key, reciver) => {
            console.log("come in get");
            console.log(target);
            console.log(key);
            return target[key];
        },
        set: (target, key, value, reciver) => {
            console.log(`setting ${key}=${value}`);
            console.log(value);
            return target[key] = value;
        }
    };
    let obj = new Proxy(header, footer);
    console.log(obj.name);
    console.log("----------------------------------------------");
    obj.name = "技术支持";
    console.log(obj);
    console.log("----------------------------------------------");
    console.log(obj.add(134));
    console.log("*******************************************");
}

{
    let func = (a, b) => a + b;
    let footer = {
        apply(target, ctx, args){
            console.log("do apply");
            return Reflect.apply(...arguments);
        }
    };
    let obj = new Proxy(func, footer);
    console.log(obj(13, 45));
    console.log("*******************************************");
}
