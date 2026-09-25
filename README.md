# React `useEffect()` Hook

## 📚 Topic Covered

In this lesson, we learned how to use the React `useEffect()` Hook with `useState()`.

The examples demonstrate:

* How `useEffect()` works
* How `useEffect()` runs after component rendering
* How to run `useEffect()` only once
* How to run `useEffect()` when a state value changes
* How to use `useEffect()` with an input field
* How `useState()` and `useEffect()` work together

---

# 1. What is `useEffect()`?

`useEffect()` is a React Hook used when we want to perform some action after the component renders or when some data changes.

For example:

* Displaying a message in the console
* Calling an API
* Updating the document title
* Working with timers
* Fetching data
* Performing an action when state changes

Basic syntax:

```jsx
useEffect(() => {
    // Code to execute
});
```

---

# 2. Example: Counter with `useEffect()`

```jsx
import React, { useEffect, useState } from 'react'

function App() {

    const [use, stUse] = useState(0);

    function increase() {
        stUse(use + 1);
    }

    useEffect(() => {
        console.log("count updated");
    }, [use]);

    return (
        <div>
            <h1>Count: {use}</h1>

            <button onClick={increase}>
                Click
            </button>
        </div>
    )
}

export default App
```

## How this example works

### Step 1: Create state

```jsx
const [use, stUse] = useState(0);
```

Here:

* `use` stores the current count.
* `stUse` updates the count.
* Initial value is `0`.

---

### Step 2: Create the function

```jsx
function increase() {
    stUse(use + 1);
}
```

When the button is clicked:

```text
0 → 1 → 2 → 3 → 4 ...
```

The state value changes.

---

### Step 3: Use `useEffect()`

```jsx
useEffect(() => {
    console.log("count updated");
}, [use]);
```

The important part is:

```jsx
[use]
```

This is called the **dependency array**.

It means:

> "Run this effect whenever the `use` value changes."

So, when we click the button:

```text
Button Click
     ↓
increase()
     ↓
stUse(use + 1)
     ↓
State changes
     ↓
Component re-renders
     ↓
useEffect() runs
     ↓
"count updated" appears in console
```

---

# 3. Example: Input Field with Empty Dependency Array

```jsx
import React, { useEffect, useState } from 'react'

function Kumar() {

    const [use, stUse] = useState("");

    useEffect(() => {
        console.log("text updated:", use);
    }, []);

    function click(e) {
        stUse(e.target.value);
    }

    return (
        <div>
            <h1>Text: {use}</h1>

            <input
                value={use}
                onChange={click}
            />
        </div>
    )
}

export default Kumar
```

## Important Point

Here we have:

```jsx
useEffect(() => {
    console.log("text updated:", use);
}, []);
```

The dependency array is empty:

```jsx
[]
```

This means:

> "Run this effect only after the component initially renders."

It does **not** run every time the input value changes.

---

# 4. Example: Input Field with `[use]`

Now let's change the dependency array.

```jsx
import React, { useEffect, useState } from 'react'

function Kumar() {

    const [use, stUse] = useState("");

    useEffect(() => {
        console.log("text updated:", use);
    }, [use]);

    function click(e) {
        stUse(e.target.value);
    }

    return (
        <div>
            <h1>Text: {use}</h1>

            <input
                value={use}
                onChange={click}
            />
        </div>
    )
}

export default Kumar
```

Now we have:

```jsx
[use]
```

This means:

> "Run the effect whenever the `use` state changes."

For example, if the student types:

```text
K
Ku
Kum
Kuma
Kumar
```

The state changes every time.

Therefore, `useEffect()` also runs every time.

Console output will be similar to:

```text
text updated: K
text updated: Ku
text updated: Kum
text updated: Kuma
text updated: Kumar
```

---

# 5. Difference Between `[]` and `[use]`

This is one of the most important concepts.

| Dependency Array    | When `useEffect()` Runs   |
| ------------------- | ------------------------- |
| No dependency array | After every render        |
| `[]`                | Once after initial render |
| `[use]`             | When `use` changes        |

### Example

```jsx
useEffect(() => {
    console.log("Hello");
});
```

Runs after every render.

---

```jsx
useEffect(() => {
    console.log("Hello");
}, []);
```

Runs once after the initial render.

---

```jsx
useEffect(() => {
    console.log("Hello");
}, [use]);
```

Runs when `use` changes.

---

# 6. `useState()` + `useEffect()`

A very common pattern in React is:

```jsx
const [data, setData] = useState("");
```

and:

```jsx
useEffect(() => {
    // action
}, [data]);
```

The basic flow is:

```text
User Action
     ↓
State Changes
     ↓
Component Re-renders
     ↓
useEffect Checks Dependency
     ↓
Dependency Changed?
     ↓
Yes
     ↓
Effect Runs
```

---

# 7. Real-Life Example

Imagine a search box.

The user types:

```text
python
```

We can use `useEffect()` to perform an API request whenever the search text changes.

Conceptually:

```jsx
const [search, setSearch] = useState("");

useEffect(() => {

    console.log("Search changed:", search);

    // API call can be made here

}, [search]);
```

Whenever:

```text
p
py
pyt
pyth
pytho
python
```

the `search` state changes, and the effect runs.

---

# 8. Key Points for Students

### `useState()`

Used to store and update data.

```jsx
const [value, setValue] = useState("");
```

### `useEffect()`

Used to perform an action after rendering or when dependencies change.

```jsx
useEffect(() => {
    // effect code
}, [dependency]);
```

### Empty dependency array

```jsx
[]
```

Means the effect runs after the initial render.

### Dependency array with state

```jsx
[value]
```

Means the effect runs when `value` changes.

---

# 9. Quick Revision

Remember this simple rule:

```text
useEffect()
    ↓
No [] → Runs after every render

useEffect(..., [])
    ↓
Runs after initial render

useEffect(..., [value])
    ↓
Runs when value changes
```

---

# 10. Student Practice Tasks

### Practice 1: Counter

Create a counter with:

* Increase button
* Decrease button
* Reset button
* Display current count
* Use `useEffect()` to print the count in the console whenever it changes.

---

### Practice 2: Name Input

Create an input field:

```text
Enter your name: [__________]

Hello Kumar
```

Use:

* `useState()`
* `useEffect()`

Print the updated name in the console.

---

### Practice 3: Document Title

Create a counter and use `useEffect()` to change the browser title:

```text
Count: 0
Count: 1
Count: 2
Count: 3
```

---

# Conclusion

In this lesson, we learned the basic working of the React `useEffect()` Hook.

The most important concept to remember is the **dependency array**.

```jsx
useEffect(() => {
    // code
}, []);
```

and

```jsx
useEffect(() => {
    // code
}, [value]);
```

Understanding these two patterns is very important before moving to practical topics such as **API calls, data fetching, timers, and side effects in React applications**.
