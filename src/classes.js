/**
 * Created by jsliu on 2017/11/15.
 */
{
    class Coder{
        name(val){
            console.log(val);
        }
    }
    let user=new Coder;
    user.name("liujiansheng");
    console.log("*******************************");
}

{
    class Coder{
        name(val){
            console.log("name value is:",val);
            return "hello "+val;
            console.log("-------------");
        }
        skill(val){
            let str=this.name('world!')+':'+'the most popular skill is:'+val;
            console.log(str);
        }
    }
    let user=new Coder;
    user.skill("IT");
    console.log("*******************************");
}

{
    class User{
        name(val){
            console.log("name arguments is:",val);
            return "hello "+val;
        }
        skill(val){
            let str="the most popular skill is:"+val;
            console.log(str);
        }
        constructor(a,b,c,d){
            this.a=a;
            this.b=b;
            this.c=c;
            this.d=d;
        }
        add(){
            return this.a+this.b;
        }
        multple(){
            return this.c*this.d;
        }
    }
    let user = new User(12,23,34,45);
    user.skill("FRONT-END-WEB");
    console.log(user.add());
    console.log(user.multple());
    console.log("*******************************");
}

{
    class People{
        constructor(name){
            this.name=name;
        }
        sayName(){
            console.log("name is:",this.name);
        }
    }

    class Student extends People{
        constructor(name,sex){
            super(name);
            this.sex=sex;
        }
        saySex(){
            console.log("sex value is:",this.sex);
        }
    }
    let student=new Student("tom","female");
    student.sayName();
    student.saySex();
    console.log("*******************************");
}

{
    class animal{
        constructor (name){
            this.name=name;
        }
        set name(name){
          this._name_1=name;
        }
        get name(){
            return this._name_1.toUpperCase();
        }
        getName(){
            return this.name;
        }
    }

    let ani=new animal("jeery");
   console.log(ani.name);
   console.log(ani._name_1);
   console.log(ani.getName());
    console.log("*******************************");
}

{
    class Color{
        static colorChange(name){
           return name[0].toUpperCase()+name.substr(1).toLowerCase();
        }
    }
    console.log(Color.colorChange('redBlueGreen'));
    console.log("*******************************");
}