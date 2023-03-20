function gradeGenerator(marks){
let marks = "Insert Marks attained";

if (marks < 40) {
    return "E Grade attained"
} 
else if (marks >= 40 && marks<=49) {
    return "D Grade attained"
}
else if (marks >49 && marks<59) {
    return "C Grade attained"
}
else if (marks >= 60 && marks<=79) {
    return "B Grade attained"
} else {
    return "A Grade attained" ;
    }
