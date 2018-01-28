function AgeChecker(props) {
    var ageRestriction = "At least you must 13 to access this site."
    if(props.age > 13) {
        ageRestriction = "Your age meets our requirement";
    }
    return ageRestriction;
}

export default AgeChecker;