/**
 * Name: Yash Patel
 * Email: Yash_Patel5@student.uml.edu
 * File: generate_table.js
 * 
 * I referred to the following websites:
 *      https://www.w3schools.com/js/js_htmldom_eventlistener.asp for learning about event listener
 *      https://www.w3schools.com/jsref/jsref_number.asp for learning about converting the inputs to numbers
 *      https://www.w3schools.com/jsref/jsref_isnan.asp for learning about checking if the converted inputs are actually valid numbers 
 *  
 */


// function used for adding a row to the table
function add_row(row_content) {
    return '<tr>' + row_content + '</tr>';
}

// function used for adding data to a cell of a row
function add_cell(cell_content) {
    return '<td>' + cell_content + '</td>';
}

// function used for adding the table headings
function add_heading(heading) {
    return '<th>' + heading + '</th>';
}

// function used for generating multiplication table, which is triggered when the generate button is clicked
function generate_multiplication_table(event) {
    event.preventDefault(); // using to not display any default table before the button is clicked

    // reading the values from the form, and converting them to numbers as the input values are text by default
    var min_x = Number(document.getElementById('min_x').value);
    var max_x = Number(document.getElementById('max_x').value);
    var min_y = Number(document.getElementById('min_y').value);
    var max_y = Number(document.getElementById('max_y').value);

    console.log(min_x);
    console.log(max_x);
    console.log(min_y);
    console.log(max_y);

    // conditionals for checking if the input numbers are out of range, and if there are any invalid entries
    if (min_x > 50 || min_x < -50) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Value for Minimum Column Value is out of range. Please enter a number between -50 and 50.";
    }
    else if (max_x > 50 || max_x < -50) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Value for Maximum Column Value is out of range. Please enter a number between -50 and 50.";
    }
    else if (min_y > 50 || min_y < -50) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Value for Minimum Row Value is out of range. Please enter a number between -50 and 50.";
    }
    else if (max_y > 50 || max_y < -50) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Value for Maximum Row Value is out of range. Please enter a number between -50 and 50.";
    }
    else if (min_x > max_x) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Minimum Column Value is greater than Maximum Column Value, please enter valid numbers.";
    }
    else if (min_y > max_y) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Minimum Row Value is greater than Maximum Row Value, please enter valid numbers.";
    }
    else if (isNaN(min_x)) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Minimum Column Value is not a number. Please enter a valid number.";
    }
    else if (isNaN(max_x)) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Maximum Column Value is not a number. Please enter a valid number.";
    }
    else if (isNaN(min_y)) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Minimum Row Value is not a number. Please enter a valid number.";
    }
    else if (isNaN(max_y)) {
        document.getElementById('multiplication_table').innerHTML = "";
        document.getElementById('error_msg').innerText = "Maximum Row Value is not a number. Please enter a valid number.";
    }
    else{ 
        // if the input are valid, then a multiplication table would be generated
        document.getElementById('error_msg').innerText = "";
    
        var mult_table = '<table>';

        // writing the column heading
        var headings = add_heading('');
        for (var x = min_x; x <= max_x; x++) {
            headings += add_heading(x);
        }
        mult_table += add_row(headings);

        // writing the rows
        for (var i = min_y; i <= max_y; i++) {
            row_content = add_cell(i);
            for (var j = min_x; j <= max_x; j++) {
                row_content += add_cell(i * j);
            }
            mult_table += add_row(row_content);
        }
        mult_table += '</table>';

        document.getElementById('multiplication_table').innerHTML = mult_table;
    }
}

// calling the function for generating the table when the form is submitted.
document.getElementById('numbers').addEventListener('submit', generate_multiplication_table);
