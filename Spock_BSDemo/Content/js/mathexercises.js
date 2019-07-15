
//toggle divMath
$("#fizzCode").click(function () {
        var x = document.getElementById("divFizz");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
);




//Button sum of sll fears
$("#sumAll").click(function () {
    //Variables
    var num1 = Number($("#fear1").val())
    var num2 = Number($("#fear2").val())
    var num3 = Number($("#fear3").val())
    var num4 = Number($("#fear4").val())
    var num5 = Number($("#fear5").val())
    var num6 = Number($("#fear6").val())
    var num7 = Number($("#fear7").val())
    //Sum
    var array = [num1, num2, num3, num4, num5, num6]
    var sumTrue = false
    //Sum Of All
    for (i = 0; i < array.length - 1; i++) {
        for (y = i + 1; y <= array.length - 1; y++) {
            if (array[i] + array[y] == num7) {
                sumTrue = true
                $("#output1").html("<b>" + num7 + "</b> was found by adding array members " + "<span class='target'>" + array[i] +
                    " </span> and <span class='target'>" + array[y] + "</span>");
                break;
            }
        }
    }
    if (sumTrue == false) {
        $("#output1").html("K has <b> not </b> been found");
    }
});


//Palindrome
$("#btnPal").click(function () {
    //Step 1: Get the word
    var str = $("#palIn").val();
    var reverse = "";
    //Step 2: Reverse the word
    //Use a decrementing "for" loop in conjunction
    //substr command and the += operator to produce the reverse word.
    if (str == "" || str.length == 0 || str == null) {
        $("#palIn").val();
        return;
        //Box is empty
    }

    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    var message = "";
    if (str == reverse) {
        message = "Your word \"" + str + "\" reversed = " + reverse + " therefore, " + str + " is a Palindrome";
    }
    else {
        message = "Your word \"" + str + "\" reversed = " + reverse + " therefore, " + str + " is not a Palindrome";
    }


    //Step 3: Inform the user
    $("#palOut").text(message); {

    }
    $("#btnClearPal").click(function () {
        $("#palIn").text("");
        $("#palOut").text("");
    })


});

//FizzBuzz
$("#fizzBtn").click(function () {
    var num1 = +$("#fizzIn1").val();
    var num2 = +$("#fizzIn2").val();
    //run
    for (var i = 1, array = [], fizz = 0, buzz = 0; i <= 100; i++) {
        fizz = i % num1;
        buzz = i % num2;

        if (!fizz && !buzz) {
            array.push("<span class='fizzbuzz'>Fizz-Buzz</span>");
        }
        else if (!fizz) {
            array.push("<span class='fizz'>Fizz</span>");
        }
        else if (!buzz) {
            array.push("<span class='buzz'>Buzz</span>");
        }
        else {
            array.push(i);

        }

    };
    //result
    $("#output2").html(array.join(', '));
});

//Math Basics
$("#btnMath").click(function () {
    //Step 1: get the user data
    var num1 = Number($("#input1").val());
    //getting the value from user input from an input element
    var num2 = Number($("#input2").val());//
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());

    //Step 2: Do something with the data in this case add and multiply
    //perform some operation
    //var sum = num1 + num2 + num3 + num4 + num5;
    //var product = num1 * num2 * num3 * num4 * num5;
    //var average = sum / 5;

    $("#least").text("The smallest number is: " + Math.min(num1, num2, num3, num4, num5));
    $("#greatest").text("The largest number is: " + Math.max(num1, num2, num3, num4, num5));
    $("#sum").text("The sum of the numbers is: " + (num1 + num2 + num3 + num4 + num5));
    $("#product").text("The product of numbers is: " + (num1 * num2 * num3 * num4 * num5));
    $("#mean").text("The average of numbers is: " + (num1 + num2 + num3 + num4 + num5) / 5);


    //Step 3 display the results
    //$("#greatest").text("The largest number is: " + largest);
    //$("#mean").text("The sum of the numbers is: " + sum);
    //$("#sum").text("The product of the numbers is: " + product);
    //$("#product").text("The average of the numbers is: " + average);
})

//step 4 button to clear the results
$("#clearBtn").click(function () {
    $("#input1,#input2,#input3,#input4,#input5").val("");

    $("#least, #greatest, #mean, #sum, #product").text("");

});


//Factorial
$("#btnFact").click(function () {
    //Step 1: Get User data
    var number = +$("#fact").val();


    //we are trying to make sure the user does not enter numbers greater than 170
    if (number > 170) {
        alert("Please enter positive numbers less than 171");
        $("#fact").val('');
        return;//return satement used to kick out the click anonymous function
    }

    else {
        //Step 2:Calculate the factorial
        for (var loop = number - 1; loop > 1; loop--) {
            //How do we calculate the factorial
            number *= loop;
        }

    }
    //Step: Show the result
    $("#factOut").text(number);
})

//Clear the text
$("#btnClear").click(function () {

    $("#fact").val("");
    $("#factOut").text("");

});