function showProfile(id, name, age, breed, mood) {

    const petName = name;
    const petAge = age;
    let petBreed = breed;
    let petMood = mood;

    let owner = null;
    let vaccination = null;
    let rescueStory;

    {
        var shelterName = "Depressing Lost Shelter";
        let shelterCode = "HP-2024";
    }

    let adoptionAge = age;
    let ageMatch = (petAge == adoptionAge);

    let microchipId = "MC-2024";
    let scannedChipId = "MC-2024";
    let chipMatch = (microchipId == scannedChipId);

    var today = new Date();
    var saleEnd;

    if (petName == "Bug") {
        saleEnd = new Date(2027, 0, 1); // Jan 1 2027
    }

    else if (petName == "Gwendolyn") {
        saleEnd = new Date(2027, 6, 7); // July 7 2027
    }

    else if (petName == "Pyg") {
        saleEnd = new Date(2028, 1, 15); // Feb 15 2028
    }

    var daysLeft = Math.floor(
        (saleEnd.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    document.getElementById(id).innerHTML =

    "Name: " + petName +
    "<br>Age: " + petAge +
    "<br>Breed: " + petBreed +
    "<br>Mood: " + petMood +
    "<br>Shelter: " + shelterName +
    "<br>Age Match: " + ageMatch +
    "<br>Chip Match: " + chipMatch +
    "<br>Sale Ends In: " + daysLeft + " days";

}