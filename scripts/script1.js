day=14;

switch (((day%7)+1)) { 
    case 1: 
    {
        console.log("you entered sunday");
        break;
    }
    case 2: 
    {
        console.log("you entered Monday");
        break;
    }
    case 3: 
    {
        console.log("you entered Tuesday");
        break;
    }
    case 4: 
    {
        console.log("you entered Wednesday");
        break;
    }
    case 5: 
    {
        console.log("you entered Thursday");
        break;
    }
    case 6: 
    {
        console.log("you entered Friday");
        break;
    }
    case 7: 
    {
        console.log("you entered Saturday");
        break;
    }
    default:
    {
        console.log("you entered wrong day");
    }
}// end of switch statement
