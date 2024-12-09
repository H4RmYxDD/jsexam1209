//elso feladat
function getMiddle(s){
    const len = s.length;
    const mid = Math.floor(len/2);

    if (len%2===0){
        return s[mid -1]+s[mid];
    } else{
        return s[mid];
    }
}

//masodik feladat
function bmi(weight, height){
    const bmi = weight/(height**2);
    if (bmi <=18.5){
        return "Underweight";
    } else if (bmi <=25.0){
        return "Normal";
    } else if (bmi <=30.0){
        return "Overweight";
    } else {
        return "Obese";
    }
}

//harmadik feladat
function isSquare(n){
    if (n<0) return false;
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

//negyedik feladat
function stringClean(s){
    return s.replace(/[0-9]/g, '');
}