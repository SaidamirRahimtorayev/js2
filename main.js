let string = prompt("Enter String type information...")
let number = Number(prompt("Enter number type information..."))
let boolen = Boolean(prompt("Enter Boolean type information..."))
alert("Are you sure you entered all the information correctly?")

alert("Enter number type information... = " + typeof(number) + " \n Enter String type information... =  " + typeof(string) + " \n Enter Boolean type information... = " + typeof(boolen))