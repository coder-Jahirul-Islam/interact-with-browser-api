// alert("How are you?")
const showAlert = () => {
    alert("Dosto, taka dhar dite parbi, just 500?")
}

const landMoney = () =>{
   const result = confirm("Will you land me 500 Taka!")

   console.log(result);
   if(result === true){
    alert("Tui amar Jan er Dosto!!")
   }else{
    console.log("Dure diye mor");
   }
}

const getInfo = () => {
    // alert
    // confirm
    const name = prompt("Tell me your name?")
    console.log(name);
    if(name === null){
        alert("Nam na dile keam nai! Ja fooooooot");
    }else{
        console.log(name,"Welcome to this world");
    }
}




// 3 Types of pop-up box
 /*
 All of the popups open a modal window.
 the user cannot interact with the rest of the components of the web page without responding to this window first.
 1)Alert Box 
 2)Confirmation Box
3)Prompt Box


Alert Box
1)Used to inform/alert the user and ntify about an event 
2)Contains only one button, named 'OK' and returns nothing as output 
3)Regular syntax of it: alert("message")


Confirmation Box
1)Provides user with a choice and notify about an event.
2)This type of popup box has two buttons, named "OK" and "cancel", and return 'true' and 'false' depending on the respective button click.

3)Regular syntax of it: confirm("message")

alert va confirmation noted txt file  



Prompt box
1) Interaction with user is possible by asking the user to input some information
2)Stores the user information
3)It has two button: 'Ok' and 'Cancel' if the users click okk the box return the input value. if the users clicks cancel the box return null.
4)regular syntax of it: prompt("message")


*/