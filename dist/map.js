"use strict";

/**
 * Created by jsliu on 2017/11/15.
 */

{
    var json = {
        name: "liu",
        age: 18
    };
    var map = new Map();
    map.set("userInfo", json);
    console.log(map);
    console.log("*******************************************");
}

{
    var _json = {
        name: "liu",
        age: 18
    };
    var map = new Map();
    map.set("userInfo", _json);
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
    var obj = {
        add: function add(a) {
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            return a + b;
        },
        name: "liu"
    };
    console.log(obj.add(12));
    console.log(obj.add(12, 13));
    console.log("*******************************************");
}

{
    var _obj = new Proxy({
        add: function add(a) {
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            return a + b;
        },
        name: "liu"
    }, {
        get: function get(target, key, reciver) {
            console.log("come in get: " + key);
            return target[key];
        }
    });
    console.log(_obj.name);
    console.log(_obj.add(23, 32));
    console.log("*******************************************");
}

{
    var hander = {
        add: function add(a) {
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 13;
            return a + b;
        },
        name: "liu jian sheng"
    };
    var footer = {
        get: function get(target, key, reciver) {
            if (key == "name") return 'hello ' + target[key];else if (key == "add") return target[key];
        }
    };
    var _obj2 = new Proxy(hander, footer);
    console.log(_obj2.name);
    console.log(_obj2.add(12));
    console.log("*******************************************");
}

{
    var header = {
        add: function add(a) {
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 13;
            return a * b;
        },
        name: "liu jian sheng"
    };
    var _footer = {
        get: function get(target, key, reciver) {
            console.log("come in get");
            console.log(target);
            console.log(key);
            return target[key];
        },
        set: function set(target, key, value, reciver) {
            console.log("setting " + key + "=" + value);
            console.log(value);
            return target[key] = value;
        }
    };
    var _obj3 = new Proxy(header, _footer);
    console.log(_obj3.name);
    console.log("----------------------------------------------");
    _obj3.name = "技术支持";
    console.log(_obj3);
    console.log("----------------------------------------------");
    console.log(_obj3.add(134));
    console.log("*******************************************");
}

{
    var func = function func(a, b) {
        return a + b;
    };
    var _footer2 = {
        apply: function apply(target, ctx, args) {
            console.log("do apply");
            return Reflect.apply.apply(Reflect, arguments);
        }
    };
    var _obj4 = new Proxy(func, _footer2);
    console.log(_obj4(13, 45));
    console.log("*******************************************");
}
