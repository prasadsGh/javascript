

let startTime=new  Date().getTime();
setTimeout(print_fun,10*1000);
let endTime =new  Date().getTime();
function print_fun(){
    console.log("your program took "+ (endTime-startTime)/1000+  " seconds");
}

/*
  see this program logic wont work as it should be because of 
  async nature of javascript as , we know javascript is interpreted language but 
  and it should run line by line but due to async nature , it delegated the long 
  running set timeout task to some other core and kept running further process 
  and when the delegated task was ready then it was the programms whole output was
  served , this explains the behavious of async js nature :)

*/