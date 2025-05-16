const greet=require('./app');
if(greet()==="Hello from DevOps!"){
    console.log("Test passed");
    ProcessingInstruction.exit(0);
}else{
    console.log("Test failed");
    ProcessingInstruction.exit(1);
}