# Student Registration Form

## Case Study Title

**Student Registration Form Using JavaScript Events, DOM Manipulation and Form Validation**

## Objective

To create an interactive **Student Registration Form** using HTML, CSS and JavaScript, where users can enter personal, account and academic details, interact with different form elements, and validate their input using JavaScript events.

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JavaScript Events
- Form Validation
- Visual Studio Code
- Web Browser

## Description

This project implements a **Student Registration Form** using HTML, CSS and JavaScript.

The registration form contains:

- First Name
- Last Name
- Birthday
- Gender
- Username
- Email
- Password
- Course
- About You
- Terms and Conditions

Various JavaScript events are used to make the form interactive. The entered information is validated before the form is submitted.

The project also demonstrates **DOM manipulation** by dynamically updating messages, validation status, password strength, character count and event activity.

## Features

- Student registration form
- Personal and academic information fields
- Input validation
- Email validation
- Username validation
- Password strength checking
- Gender selection
- Course selection
- About You character counter
- Interactive form fields
- Multiple JavaScript events
- Dynamic event activity display
- Submit and Reset functionality
- Responsive user interface

## How It Works

### 1. Page Loading

When the webpage is completely loaded, the `DOMContentLoaded` event is triggered.

```javascript
document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code
});
````

This ensures that the HTML elements are available before JavaScript interacts with them.

### 2. Focus Event

When the user selects an input field, the `focus` event is triggered.

```javascript
field.addEventListener("focus", function () {
    // Focus action
});
```

It is used to identify when the user starts entering information into a field.

### 3. Blur Event

When the user moves away from an input field, the `blur` event is triggered.

```javascript
field.addEventListener("blur", function () {
    // Blur action
});
```

It is used to validate the entered information after the user leaves the field.

### 4. Input Event

The `input` event detects changes while the user is typing.

```javascript
username.addEventListener("input", function () {
    // Input validation
});
```

It is used for real-time username validation, password strength checking and character counting.

### 5. Change Event

The `change` event is used when the value of elements such as the birthday or course selection changes.

```javascript
course.addEventListener("change", function () {
    // Course selection
});
```

### 6. Keydown Event

The `keydown` event detects when a keyboard key is pressed.

```javascript
firstName.addEventListener("keydown", function (event) {
    // Keyboard event
});
```

It is used to detect keyboard activity and control the type of input entered.

### 7. Mouseover Event

The `mouseover` event is triggered when the mouse pointer moves over an element.

```javascript
submitBtn.addEventListener("mouseover", function () {
    // Mouseover action
});
```

It is used to provide an interactive effect on the submit button.

### 8. Mouseout Event

The `mouseout` event is triggered when the mouse pointer leaves an element.

```javascript
submitBtn.addEventListener("mouseout", function () {
    // Mouseout action
});
```

It is used to restore the original button text.

### 9. Click Event

The `click` event is used when the reset button is clicked.

```javascript
resetBtn.addEventListener("click", function () {
    // Reset action
});
```

### 10. Submit Event

The `submit` event handles the registration form submission.

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validation
});
```

The form is validated before the submission is completed.

### 11. Reset Event

The `reset` event is triggered when the user resets the form.

```javascript
form.addEventListener("reset", function () {
    // Reset form data
});
```

It clears the validation messages and restores the form to its initial state.

## DOM Manipulation

The Document Object Model (DOM) is used to access and modify HTML elements dynamically.

### `getElementById()`

Used to access an element using its ID.

```javascript
document.getElementById("registrationForm");
```

### `querySelector()`

Used to select an HTML element using a CSS selector.

```javascript
document.querySelector(".form-card");
```

### `querySelectorAll()`

Used to select multiple HTML elements.

```javascript
document.querySelectorAll("input");
```

### `textContent`

Used to change the text displayed inside an HTML element.

```javascript
eventText.textContent = "Form submitted successfully";
```

### `classList`

Used to add or remove CSS classes dynamically.

```javascript
field.classList.add("valid");
field.classList.remove("invalid");
```

### `style`

Used to modify the style of an HTML element through JavaScript.

```javascript
element.style.display = "block";
```

## Form Validation

The form validates the following information:

* First Name
* Last Name
* Birthday
* Gender
* Username
* Email
* Password
* Course
* About You
* Terms and Conditions

The validation checks whether the required fields are filled correctly before allowing the form to be submitted.

### Email Validation

A regular expression is used to check whether the entered email follows a valid format.

### Username Validation

The username is checked for the required minimum length.

### Password Validation

The password is checked for strength and the password strength indicator is updated dynamically.

### Birthday Validation

The birthday field is checked to ensure that a valid date is entered.

## JavaScript Concepts Used

### `addEventListener()`

Attaches an event listener to an HTML element.

### `preventDefault()`

Prevents the default form submission behavior.

### `getElementById()`

Accesses an HTML element using its ID.

### `querySelector()`

Selects an HTML element using a CSS selector.

### `querySelectorAll()`

Selects multiple HTML elements.

### `textContent`

Changes the text content of an HTML element.

### `classList`

Adds or removes CSS classes dynamically.

### Regular Expression

Used for validating the email address and other input patterns.

## Event Flow

```text
User Interacts With Form
          ↓
     JavaScript Event
          ↓
    Event Listener
          ↓
   JavaScript Function
          ↓
     Input Validation
          ↓
      DOM Update
          ↓
 Valid / Invalid Message
```

## Form Submission Flow

```text
User Enters Details
        ↓
   Submit Button
        ↓
    Submit Event
        ↓
   Validate Inputs
        ↓
   ┌───────────────┐
   │ Valid Input?  │
   └───────┬───────┘
       Yes ↓     ↓ No
     Success    Error
      Message   Message
```

## Project Structure

```text
Student-Registration/
│
├── index.html
├── style.css
└── script.js
```

## How to Run

1. Open the project folder in **Visual Studio Code**.
2. Open the `index.html` file.
3. Run the file using **Live Server** or open it directly in a web browser.
4. Enter the required student information.
5. Interact with different form fields to observe the JavaScript events.
6. Submit the form to check the validation.
7. Use the Reset button to clear the entered information.

## Example

If the user leaves the email field empty or enters an invalid email:

```text
Invalid Email Address
```

If all required information is entered correctly:

```text
Registration Successful
```

The event monitor also displays the latest JavaScript event performed by the user.

## Conclusion

The **Student Registration Form** was successfully implemented using HTML, CSS and JavaScript. The application demonstrates different JavaScript events such as **focus, blur, input, change, keydown, mouseover, mouseout, click, submit and reset**.

The case study also demonstrates **DOM manipulation, event listeners and form validation**. These concepts make the registration form interactive, responsive and user-friendly.

This case study provides practical understanding of **JavaScript event handling, DOM manipulation, input validation and dynamic webpage interaction**.

```
```

