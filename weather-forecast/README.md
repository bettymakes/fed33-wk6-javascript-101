# Weather forecast

**⚠️ Don't forget to fork this repository before you start ⚠️**

Before we start with JavaScript, let's first finish styling the site by centering the content in the middle of the page like this:
![Centered content in app](https://screenshot.click/2019-57-02-fukmn-3o0gj.jpg)

*Hint*
* Is the box the right size? Does it need to be bigger or smaller?
* Using `grid`, explore the `justify-content` and `align-items`

---
The goal of this exercise is to change the background colour of the app and the corresponding descriptive text depending on the temperature. These are the following conditions:
* If the temperature is 20 degrees or higher:
  * The colour of the background should be `#fab1a0`
  * The text should read `Yikes! It's too hot 🔥.`

* If the temperature is 0 - 19 degrees:
  * The colour of the background should be `#55efc4`
  * The text should read `It's just right 👍.`

* If the temperature is -1 degrees or below:
    * The colour of the background should be `#74b9ff`
    * The text should read `Brr! It's too cold ❄️.`

*Hint*
* Think about how we *get* elements from the `Document Object Model (DOM)`
* To update any CSS property on an element, you can manipulate it through the `style` property on that DOM object
  * (e.g. `someElement.style.maxWidth = '50%';`)
* To update the text of an element, you can manipulate it through the `innerText` property
  * (e.g. `someElement.innerText = "hello"`)
