//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

    //  this keyword is a context director that points a function towards the right information

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // implicit, explicit, default, new

  // 3) What is the difference between call and apply?

      // call uses information from an object to fill function arguments, apply uses an array to fill such arguments

  // 4) What does .bind do?

      // bind is a function that works on objects that are functions & binds them together


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "brittaca",
      email: "brittaca@goog.com",
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

  var usernameFunc = user.getUsername();

  // alert(usernameFunc);

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  var Car = function(make, model, year, move) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = move;
    this.moveCar = function() {
       this.move = this.move + 10;
       return this.move;
    };
  }

var prius = new Car('Toyota', 'Prius', 2011, 22);
var mustang = new Car('Ford', 'Mustang', 2013, 17);

// prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
// mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).







var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)

  getYear.call(prius);

  getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)

  it will return the function definition

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  this is bound to the function getMyUsername

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

  var myUser = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com'
  };

  var getMyUsername = function(){
    console.log(this.username);
  };

  setTimeout(getMyUsername.bind(myUser), 5000);

// var driveThru = {
//       makeOrder: function() {
//         setTimeout(function(){
//           this.total = 3.50
//         }.bind(this), 5000)
//       }
//     }
//
//     driveThru.makeOrder();
//
//     setTimeout(function(){
//       console.log(driveThru.total);
//     }, 6000)
