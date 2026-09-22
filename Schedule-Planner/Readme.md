# Seminar Schedule Planner

## Case Study Title

**Seminar Schedule Planner Using JavaScript Click Events, Alert Box, Local Storage and Session Storage**

## Objective

To create an interactive **Seminar Schedule Planner** using HTML, CSS and JavaScript, where users can select seminar topics, view the selected topic through an alert box, and save the selected topic using **Local Storage and Session Storage**.

## Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage
* Session Storage
* Visual Studio Code
* Web Browser

## Description

This project implements a **Seminar Schedule Planner** based on the given seminar table.

The schedule contains:

* Days
* Seminar schedule
* Begin time
* End time
* Seminar topics

The seminar topics are clickable. When the user clicks on a topic, JavaScript displays an **alert box** containing the selected topic.

The selected topic is also stored using:

* **Local Storage** – to remember the selected topic after refreshing the webpage.
* **Session Storage** – to store the selected topic during the current browser session.

## Features

* Structured seminar schedule table
* Monday, Tuesday and Wednesday schedules
* Clickable seminar topics
* JavaScript alert box
* Local Storage implementation
* Session Storage implementation
* Automatic retrieval of saved topic
* Clear Preference button
* Dynamic message display

## How It Works

### 1. Select a Topic

The user clicks on any seminar topic such as:

```text
Introduction to XML
XPath
XSL Transformations
XSL Formatting Objects
```

The `onclick` event calls the JavaScript function:

```javascript
selectTopic("XPath");
```

### 2. Display Alert

The selected topic is displayed using:

```javascript
alert("Session Storage: " + sessionStorage.getItem("currentTopic"));
```

### 3. Save in Session Storage

The selected topic is saved using:

```javascript
sessionStorage.setItem("currentTopic", topic);
```

### 4. Save in Local Storage

The selected topic is also saved using:

```javascript
localStorage.setItem("selectedTopic", topic);
```

### 5. Display Selected Topic

JavaScript updates the webpage using:

```javascript
document.getElementById("message").innerText =
    "Local Storage - Selected Topic: " +
    localStorage.getItem("selectedTopic");
```

### 6. Clear Preference

The **Clear Preference** button removes the stored topic:

```javascript
localStorage.removeItem("selectedTopic");

sessionStorage.removeItem("currentTopic");
```

## HTML Table Structure

The schedule table uses:

* `rowspan` – to combine multiple rows for the same day or schedule.
* `colspan` – to combine multiple columns for headings.
* `<th>` – for table headings.
* `<td>` – for schedule data.

Example:

```html
<td onclick="selectTopic('XPath')">
    XPath
</td>
```

## JavaScript Concepts Used

### `onclick`

Executes a function when the user clicks a seminar topic.

### `alert()`

Displays the selected topic in a popup alert box.

### `localStorage.setItem()`

Stores the selected topic permanently in the browser.

### `localStorage.getItem()`

Retrieves the saved topic.

### `localStorage.removeItem()`

Removes the selected topic from Local Storage.

### `sessionStorage.setItem()`

Stores the selected topic for the current session.

### `sessionStorage.getItem()`

Retrieves the current session topic.

### `sessionStorage.removeItem()`

Removes the topic from Session Storage.

### `getElementById()`

Accesses an HTML element using its ID.

### `innerText`

Dynamically changes the visible text on the webpage.

## Project Flow

```text
User Clicks Seminar Topic
          ↓
     onclick Event
          ↓
   selectTopic() Function
          ↓
      Alert Box
          ↓
   Session Storage
          ↓
    Local Storage
          ↓
Display Selected Topic
```

## Storage Behavior

| Storage          | Purpose                                    |
| ---------------- | ------------------------------------------ |
| Local Storage    | Saves the selected topic persistently      |
| Session Storage  | Saves the topic during the current session |
| Clear Preference | Removes both stored values                 |

## Example

If the user clicks:

```text
XSL Transformations
```

The alert displays:

```text
Session Storage: XSL Transformations
```

The webpage displays:

```text
Local Storage - Selected Topic: XSL Transformations
```

## Conclusion

The **Seminar Schedule Planner** was successfully implemented using HTML, CSS and JavaScript. The application allows users to interact with seminar topics through the **onclick event** and displays the selected topic using a JavaScript **alert box**.

The selected topic is stored using both **Local Storage and Session Storage**, allowing the application to demonstrate persistent and session-based browser storage. The Clear Preference button removes the stored data when required.

This case study demonstrates practical concepts of **HTML table design, JavaScript event handling, alert boxes, DOM manipulation, Local Storage and Session Storage**.
