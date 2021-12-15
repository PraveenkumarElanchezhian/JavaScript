
const login_page = new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve('simple promise program')
       },1000);
  })

 .then((success)=>{
    console.log(success);
 })
 .catch((err)=>{
    console.log(err);
 })



 //promise_sync

 function login(email,password){
   return new Promise((resolve,reflect)=>{
         setTimeout(()=>{
            console.log("Welcome")
            resolve({emailValue: email, passwordValue: password})
         },1000);
      })
   }
 
 function foodOrder(email){
  return new Promise((resolve,reflect)=>{
      setTimeout(()=>{
         console.log(email)
         resolve(["veg-food","non-veg-food"])
      },2000)
   })
 }
 
 function variety(foodvariety){
   return new Promise((resolve,reflect)=>{
      setTimeout(()=>{
         console.log(foodvariety)
         resolve(["Briyani","Plain-Rice"]);
      },1000)
   })
 }
 
login("abc@gmail.com",9876543210)
.then((user)=>foodOrder(user))
.then((food_variety)=>variety(food_variety));



//    promise_async


const page = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      console.log("**login_page**")
      resolve('**simple promise program**');
    },1000);
})

const food_vars = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("**Promise**");
   },1000)
})

Promise.all([page,food_vars])
.then((result)=>{
   console.log(result);
})

// async_await

function login(email,password){
   return new Promise((resolve,reflect)=>{
         setTimeout(()=>{
            console.log("Welcome")
            resolve({emailValue: email, passwordValue: password})
         },1000);
      })
   }
 
 function foodOrder(email){
  return new Promise((resolve,reflect)=>{
      setTimeout(()=>{
         console.log(email)
         resolve(["veg-food","non-veg-food"])
      },2000)
   })
 }
 
 function variety(foodvariety){
   return new Promise((resolve,reflect)=>{
      setTimeout(()=>{
         console.log(foodvariety)
         resolve(["Briyani","Plain-Rice"]);
      },1000)
   })
 }

 async function checking(){
    try{
       const user = await login("abc@gmail.com",9876543210)
       const food = await foodOrder(user)
       const dish = await variety(food)
    }
    catch(err){
       console.log("error",err)
    }
 }
 

