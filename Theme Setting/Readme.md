# Theme Preference Using Local Storage and Session Storage

## Experiment Title

**Implement Local Storage and Session Storage to Save User Preference like Theme Setting**

## Objective

To implement **Local Storage and Session Storage** in JavaScript to save and retrieve the user's selected theme preference.

## Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage
* Session Storage
* Visual Studio Code
* Web Browser

## Description

This project demonstrates a simple **Theme Preference System** where the user can select between **Light Theme** and **Dark Theme**.

The selected theme is stored using both **Local Storage** and **Session Storage**.

* **Local Storage** keeps the selected theme saved even after refreshing or reopening the webpage.
* **Session Storage** keeps the selected theme available during the current browser session.
* The **Clear Preference** button removes the saved theme from both storage types and returns the webpage to Light Theme.

## Features

* Light Theme selection
* Dark Theme selection
* Local Storage implementation
* Session Storage implementation
* Automatic theme loading when the page opens
* Clear saved preference
* Dynamic theme switching using JavaScript
* Status message showing the saved theme

## How It Works

### 1. Select Theme

The user clicks either:

```text
Light Theme
```

or

```text
Dark Theme
```

JavaScript applies the selected theme to the webpage.

### 2. Save in Local Storage

The selected theme is stored using:

```javascript
localStorage.setItem("theme", theme);
```

### 3. Save in Session Storage

The selected theme is also stored using:

```javascript
sessionStorage.setItem("currentTheme", theme);
```

### 4. Retrieve Saved Theme

When the webpage loads, JavaScript retrieves the saved theme using:

```javascript
localStorage.getItem("theme");
```

If Local Storage does not contain a theme, Session Storage is checked:

```javascript
sessionStorage.getItem("currentTheme");
```

### 5. Clear Preference

The saved theme can be removed using:

```javascript
localStorage.removeItem("theme");

sessionStorage.removeItem("currentTheme");
```

The webpage then returns to the Light Theme.

## Local Storage vs Session Storage

| Local Storage                            | Session Storage                         |
| ---------------------------------------- | --------------------------------------- |
| Stores data persistently                 | Stores data temporarily                 |
| Data remains after page refresh          | Data remains during the current session |
| Data remains after reopening the browser | Data is removed when the session ends   |
| Uses `localStorage`                      | Uses `sessionStorage`                   |

## Important JavaScript Methods

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()

sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
```

## Project Flow

```text
User Selects Theme
        ↓
JavaScript Applies Theme
        ↓
Save in Local Storage
        ↓
Save in Session Storage
        ↓
Display Saved Theme
        ↓
Refresh Page
        ↓
Retrieve Saved Theme
        ↓
Apply Theme Again
```

## Conclusion

The **Theme Preference System** successfully demonstrates the implementation of **Local Storage and Session Storage** using JavaScript. The application allows users to select a theme, save their preference, retrieve it when the webpage loads, and clear the stored preference when required.

This experiment demonstrates practical concepts of **Web Storage API, JavaScript, DOM manipulation, CSS class manipulation and event handling**.
