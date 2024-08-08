//logical operators - OR || AND &&

const password = "p@ss";

if(password.length >= 12 && password.includes("@")) {
    console.log("that is a very strong password");
} else if(password.length >= 8 || password.includes("!")) {
    console.log("that is a strong password");
} else {
    console.log("that is not a strong password");
}

