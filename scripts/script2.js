let age = 26;
let msg = "You are ";
if (age >= 0) {
  if (age >= 14 && age <= 17) {
    msg += "a High Schooler";
    if ((age) => 16) {
      console.log(msg + " and you are eligible to drive");
    } else {
      console.log(msg + " and you are not eligible to drive");
    }
  } else if (age < 14 && age >= 11) {
    msg += "a Middle Schooler";
    console.log(msg);
  } else if (age < 11 && age >= 5) {
    msg += "an Elementary Schooler";
    console.log(msg);
  } else {
    msg += " not in school or you go to college";

    if (age > 16) {
      msg += " and you are eligable to drive";
      console.log(msg);
    } else {
      console.log(msg);
    }
  }
}
else{
    console.log(msg+ " not born yet, try again");
}
