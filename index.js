for(let i = 0; i < 5; i++) {
    for(let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

for(let i = 5; i > 0; i--) {
    for(let j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

for(let i = 0; i < 5; i++) {
    for(let j = 4; j > i; j--) {
        document.write("&nbsp;");
    } 
    for(let j = 0; j <= i; j++) {
        document.write("*");
    }

    document.write("<br>");
}

 
 

for(let i = 0; i < 5; i++) {
    let gap = "";
    let star = "";

    for(let j = 4; j > i; j--) {
        gap += " ";
    } 
    for(let j = 0; j <= i; j++) {
        star += "*";
    }
    console.log(gap + star); 

}
 