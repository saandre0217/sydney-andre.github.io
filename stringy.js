function length(string) {
    var stringLength = string.length;
    return stringLength
}
function toLowerCase(string) {
    var lowerCase = string.toLowerCase();
    return lowerCase
}
function toUpperCase(string) {
    var upperCase = string.toUpperCase();
    return upperCase
}
function toDashCase(string) {
    var dash = string.replace(" ", "-");
    dash.toLowerCase();
    return dash
}
function beginsWith(string, char) {
    //create if statement using [] and == to compare first character
    if (string[0] == char) {
        return true;
    } else {
        return false;
    }
}
function endsWith(string, char) {
    //create if statment using .length - 1 and === to compare last character
    if (string(string.length - 1) === char) {
        return true
    } else {
        return false
    }
}