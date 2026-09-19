# React useState – Practical Examples

## 📌 Topic

**React useState Hook**

---

# Practical 1 – Registration Form

## 📖 Description

In this practical example, we learn how to use the **`useState` Hook** in React to store and update form input values.

We created a simple Registration Form containing:

* Name input field
* Email input field
* Display of entered Name
* Display of entered Email

Whenever the user types something into the input fields, the state is updated and the latest value is displayed on the webpage.

### Code

```jsx
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function info(e) {
    setName(e.target.value);
  }

  function kit(j) {
    setEmail(j.target.value);
  }

  return (
    <div>
      <h1>registration form:</h1>

      name:
      <input
        type="text"
        value={name}
        onChange={info}
      />

      email:
      <input
        type="email"
        value={email}
        onChange={kit}
      />

      <h2>email : {email}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default App
```

### Concepts Covered

* `useState`
* State variables
* Setter functions
* `onChange`
* `event.target.value`
* Controlled input
* Dynamic UI update

### Working Flow

```text
User enters Name
       ↓
onChange event
       ↓
info() function
       ↓
setName()
       ↓
name state updates
       ↓
React updates UI
```

Similarly, Email ke liye:

```text
User enters Email
       ↓
onChange event
       ↓
kit() function
       ↓
setEmail()
       ↓
email state updates
       ↓
React updates UI
```

---

# Practical 2 – Simple Name State Example

## 📖 Description

In this example, we learn the **basic use of `useState`**.

Initially, the `name` state contains:

```text
kumar
```

The value is displayed using:

```jsx
<h1>Hello {name}</h1>
```

When the user enters a new name in the input box, `setName()` updates the state and React automatically updates the heading.

### Code

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("kumar");

  return (
    <div>
      <h1>Hello {name}</h1>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;
```

## 🔍 Code Explanation

### 1. Import `useState`

```jsx
import { useState } from "react";
```

We import `useState` from React so that we can create state.

### 2. Create State

```jsx
const [name, setName] = useState("kumar");
```

Here:

* `name` → stores the current value
* `setName` → updates the value
* `"kumar"` → initial value

So initially:

```text
name = "kumar"
```

Therefore:

```jsx
<h1>Hello {name}</h1>
```

displays:

```text
Hello kumar
```

### 3. Update State

```jsx
onChange={(e) => setName(e.target.value)}
```

Whenever the user types something:

```text
User types "Abhishek"
        ↓
onChange
        ↓
e.target.value
        ↓
"Abhishek"
        ↓
setName("Abhishek")
        ↓
name becomes "Abhishek"
        ↓
React updates the UI
```

The output becomes:

```text
Hello Abhishek
```

---

# 🎯 What We Learned

From both practical examples, we learned that `useState` is used to **store data that can change while the application is running**.

For example:

```jsx
const [name, setName] = useState("kumar");
```

means:

```text
name       → current data
setName    → function to change data
"kumar"    → initial data
```

When state changes, React automatically re-renders the component and updates the UI.

---

# 🧠 Important Concept

### State follows this pattern:

```text
State Variable
     ↓
     name
     ↓
Setter Function
     ↓
  setName()
     ↓
State Updated
     ↓
React Re-render
     ↓
UI Updated
```

---

# 📚 Learning Outcome

After completing these practical examples, students should understand:

* What is `useState`
* How to create state
* How to set an initial state
* How to update state
* How to handle input changes
* How `event.target.value` works
* How state changes update the UI
* How to create controlled input fields

---

# 🚀 How to Run

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

---

## 👨‍💻 Practical Summary

| Practical   | Concept                         | Example              |
| ----------- | ------------------------------- | -------------------- |
| Practical 1 | `useState` with multiple states | Registration Form    |
| Practical 2 | Basic `useState`                | Dynamic Name Display |

**Technology:** React.js

**Main Topic:** `useState` Hook

**Purpose:** Understanding state management and dynamic UI updates in React.
