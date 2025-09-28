// Switch :

const month = 3;


switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");

        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;

    default:
        console.log("No valid month selected");
        break;
}

// If you dont use break then if the case is marched, all other case are
// marched by default except the default case, until the flow is broken.