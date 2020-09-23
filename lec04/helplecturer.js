function networkStatus() {
    if (Math.random()<0.3) {
       return Promise.reject("Dang, DSB Wifi is down");
     } else {
       return Promise.resolve("Yay, facebook here we come");
     }
  }

networkStatus().then(reason => {console.log(reason)},reason => {console.log(reason)});