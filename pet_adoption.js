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

    document.getElementById(id).innerHTML =

    "Name: " + petName +
    "<br>Age: " + petAge +
    "<br>Breed: " + petBreed +
    "<br>Mood: " + petMood +
    "<br>Shelter: " + shelterName +
    "<br>Age Match: " + ageMatch +
    "<br>Chip Match: " + chipMatch;

}