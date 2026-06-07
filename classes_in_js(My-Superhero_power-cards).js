class Student {

    constructor(name, age, hobby) {

        this.name = name;
        this.agevalue = Number(age);
        this.hobby = hobby;

    }

    birthYear() {

        let date = new Date();

        return date.getFullYear() - this.agevalue;

    }

}

class School extends Student {

    constructor(name, age, hobby, grade, favsub) {

        super(name, age, hobby);

        this.grade = grade;
        this.favsub = favsub;

    }

    show() {

        return this.name + " likes " + this.favsub;

    }

}

function validate() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const favsub = document.getElementById("favsub").value;
    const hobby = document.getElementById("hobby").value;

    if(name == "" || age == "" || grade == "" || favsub == "" || hobby == "") {

        document.getElementById("message").innerHTML =
        "Please fill all fields";

        document.getElementById("message").style.color =
        "red";

        return false;

    }

    else {

        document.getElementById("message").innerHTML =
        "Details Added Successfully!";

        document.getElementById("message").style.color =
        "green";

        return true;

    }

}

function showDetails() {

    if(validate() == false) {

        return;

    }

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const hobby = document.getElementById("hobby").value;
    const grade = document.getElementById("grade").value;
    const favsub = document.getElementById("favsub").value;

    const student1 = new School(
        name,
        age,
        hobby,
        grade,
        favsub
    );

    document.getElementById("details").innerHTML =

    "👦 Name: " + student1.name +
    "<br>🎂 Age: " + student1.agevalue +
    "<br>📅 Birth Year: " + student1.birthYear() +
    "<br>🏫 Grade: " + student1.grade +
    "<br>📘 Favourite Subject: " + student1.favsub +
    "<br>🎯 Hobby: " + student1.hobby +
    "<br>⭐ " + student1.show();

}

document.getElementById("name").oninput = validate;
document.getElementById("age").oninput = validate;
document.getElementById("grade").oninput = validate;
document.getElementById("favsub").oninput = validate;
document.getElementById("hobby").oninput = validate;