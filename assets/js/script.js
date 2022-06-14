if("serviceWorker" in navigator){
   navigator.serviceWorker.register("/sworker.js").then(registration=>{
       console.log("Service worker Registered")
       console.log(registration);
   }).catch(error=>{
    console.log("Service worker error")
    console.log(error);
   })
}
else{
    alert("serviceWorker not working")
}