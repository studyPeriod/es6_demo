/**
 * Created by jsliu on 2017/11/15.
 */

let status1=1;
let status2=1;
let status3=1;

function step1(resolve,reject){
    console.log("开始第一步");
    if(status1==1){
        resolve("第一步完成1111111");
    }else{
        reject("第一步失败")
    }
}

function step2(resolve,reject) {
    console.log("开始第二步");
    if(status2==1){
        resolve("第二步完成222222222222");
    }else{
        reject("第二步失败");
    }
}

function step3(resolve,reject) {
    console.log("开始第三步");
    if(status3==1)
        resolve("第三步成功333333");
    else
        reject("第三步失败");
}

new Promise(step1).then(function(val){
    console.log("step1 val is:",val);
    return new Promise(step2);
}).then(function(val){
    console.log("step2 val is:",val);
    return new Promise(step3);
}).then(function (val) {
    console.log("step3 val is:",val);
    return val;
});