
//ticket booking

function login(email,ph,callback){
   setTimeout(()=>{
     console.log("Inside login");
     callback();
   },5000)
}

function bookticket(callback){
  setTimeout(()=>{
    console.log("Ticket booked -> book snacks");
    callback();
  },3000)
}

function snacks(callback){
  setTimeout(()=>{
    console.log("Snacks booked -> order completed");
  },2000)
}
  
const user = login("email","987543210",()=>{
  bookticket(()=>{
    snacks();
  });
})


// Food order


function login_page(email,password,callback){
  setTimeout(()=>{
    console.log("Welcome")
    callback({emailValue: email, passwordValue: password})
  },1000);

}

function foodOrder(email,callback){
  setTimeout(()=>{
    callback(["veg-food","non-veg-food"])
  },2000)
}

function variety(foodvariety,callback){
  setTimeout(()=>{
    callback(["Briyani","Plain-Rice"]);
  },1000)
}

const userData = login_page("abc@gmail.com","9876543210",(data)=>{
console.log(data);
  foodOrder(data.emailValue,(food)=>{
    console.log(food);
  variety(food,(dish)=>{
    console.log(dish);
    })  
  })
});