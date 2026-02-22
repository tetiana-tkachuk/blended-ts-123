function sendDoneStatus(callback: (param: string) => void): void {
  callback("done");
}

function callbackFoo(param: string): void {
  console.log(`It's already ${param}`);
}

sendDoneStatus(callbackFoo);
