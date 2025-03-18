# QA Challenge - Cypress Tests

This repository contains a series of exercises to test your Cypress knowledge. You can access the exercises at [https://qa-challenge-rx.vercel.app/](https://qa-challenge-rx.vercel.app/)

## Instructions

1. Fork this repository
2. Install the necessary dependencies:
   ```bash
   npm install --save-dev cypress
   ```

3. Initialize Cypress and configure it to use the Vercel URL:
   ```bash
   # Create cypress.config.js in your project root
   module.exports = {
     e2e: {
       baseUrl: 'https://qa-challenge-rx.vercel.app/'
     }
   }
   ```

4. Create your test files under `cypress/e2e/`

5. Write your tests for each exercise
6. Push your solution to your forked repository

## Exercises

Navigate through the tabs in the application to see:
- Exercise requirements
- HTML structure
- Interactive examples
- Initial code templates

## Submission

Share the URL of your forked repository containing your Cypress test solutions.

Good luck!

## 📜 **Prerequisites**
To run this project from scratch, you need to have installed:
- **Node js:**
	```sh
  sudo apt update
	sudo apt-get install nodejs
  ```
- **NPM (package manager):**
	```sh
  sudo apt install npm
  ```
- **Git**:
  ```sh
  sudo apt-get install git
  ```

## ℹ️ **About the tests**

### 1️⃣ **Find product:**
- This test ensures that a product with the price of $59 is present on the page, has the name "Mouse", and can be interacted with by clicking on it.

- First, the test navigates to the application's main page using cy.visit("/").

- Next, it selects all elements with the attribute data-cy="product-item" using cy.get('[data-cy="product-item"]') and iterates over each of them using the each method. For each product item, it finds the element containing the product price using cy.wrap($el).find('[data-cy="product-price"]') and retrieves its text using the invoke('text') method.

- If the price of the product is exactly "$59" (after trimming any whitespace with trim()), the test verifies that the product name is "Mouse" using cy.wrap($el).find('[data-cy="product-name"]').should("have.text", "Mouse"). Finally, it clicks on the product item using cy.wrap($el).click().

### 2️⃣ **Table Elements:**
- This test ensures that the correct table row based on the date "05/15/2024" is found and that specific elements within that row have the expected text and are interactable.

- First, the test navigates to the application's main page using cy.visit("/"). Then, it clicks on a button with the text "Exercise 2 - Table Elements" using cy.contains("button", "Exercise 2 - Table Elements").click().

- Next, the test captures the correct table row based on the date "05/15/2024". It selects the table with the attribute name="Test1" using cy.get('table[name="Test1"]') and finds the row containing the date "05/15/2024" using contains("05/15/2024"). It then traverses up the DOM tree to the parent elements until it reaches the tbody element using parentsUntil("tbody") and stores this row in an alias called test-table using as("test-table").

- The test then performs the following checks within the captured row:

    - Finds a <p> element and verifies that its text is exactly "First" using cy.get("@test-table").find("p").should("have.text", "First").
    - Finds a <span> element and verifies that its text is exactly "Accepted" using cy.get("@test-table").find("span").should("have.text", "Accepted").
    - Finds a <button> element containing the text "View" and verifies that it is visible using cy.get("@test-table").find("button").contains("View").should("be.visible").
    - Finds a button with the class button-order-more and clicks on it using cy.get("@test-table").find("button.button-order-more").click().

### 3️⃣ **Checkbox verification:**

- This test ensures that the checkbox associated with the text "Test2" is present and checked, validating the expected state of the checkbox within the user interface.

- First, the test navigates to the application's main page using cy.visit("/"). Then, it clicks on a button with the text "Exercise 3 - Checkbox Verification" using cy.contains("button", "Exercise 3 - Checkbox Verification").click().

- Next, the test performs a series of steps to locate the checkbox associated with "Test2":

    - It selects the grid with the attribute data-cy="test-grid-3" using cy.get('[data-cy="test-grid-3"]').
    - Within this grid, it finds the element with the class item-content using find(".item-content").
    - It then searches for a paragraph (<p>) containing the text "Test2" within the item-content using contains("p", "Test2").
    - To ensure it is in the correct div, it traverses up the DOM tree to the parent element with the class item-content using parents(".item-content").
    - Within this div, it finds the checkbox (input[type="checkbox"]) using find('input[type="checkbox"]').
    - Finally, it verifies that the checkbox is checked using should("be.checked").

### 4️⃣ **Element Relations:**

- This test ensures that the element containing the text "old-car" is correctly placed within an element with the class my-class and that it has a sibling element containing the text "1". This validates the expected structure and relationships between these elements in the user interface.

- First, the test navigates to the application's main page using cy.visit("/"). Then, it clicks on a button with the text "Exercise 4 - Element Relations" using cy.contains("button", "Exercise 4 - Element Relations").click().

- Next, the test performs two main checks:

    1. Verify that "old-car" is within an element with the class my-class:

    - It selects the element with the class my-class using cy.get(".my-class").
    - Within this element, it searches for a <span> containing the text "old-car" using contains("span", "old-car").
    - It verifies that this element exists within my-class using should("exist").

    2. Ensure that the number "1" is a sibling of "old-car":

    - It again selects the element with the class my-class using cy.get(".my-class").
    - Within this element, it searches for a <span> containing the text "old-car" using contains("span", "old-car").
    - It then finds the sibling elements of this <span> using siblings("span").
    - It verifies that one of these sibling elements contains the text "1" using should("have.text", "1").

### 5️⃣ **Login Command:**

- This test ensures that the user can navigate to the login page and log in successfully using the provided credentials. The custom cy.login command abstracts the details of the login process, making the test more readable and maintainable.

- First, the test navigates to the application's main page using cy.visit("/"). Then, it clicks on a button with the text "Exercise 5 - Login Command" using cy.contains("button", "Exercise 5 - Login Command").click().

- Next, the test uses a custom Cypress command cy.login to perform the login action. The cy.login command is called with the email "test@example.com" and the password "password123". This custom command is expected to handle the login process, such as filling in the login form and submitting it.

- For the test to function correctly, it relies on the commands.js file (which contains the custom command) located in the support folder. If you are using the latest version of Cypress (14), the e2e.js file is also required to declare the import of commands.js.

- Additionally, it is important to remove the line "supportFile: false" from the cypress.config.cjs file if it exists.

- Regarding the .cjs extension instead of just .js for the Cypress configuration file, it ensures better compatibility without requiring significant modifications to the project structure.

### 6️⃣ **Product Selection:**

- This test ensures that the product card containing the "Gaming Headset" can be located and that the "Add to Cart" button within that card can be clicked, validating the expected behavior of the product selection functionality in the user interface.

- First, the test navigates to the application's main page using cy.visit("/"). Then, it clicks on a button with the text "Exercise 6 - Product Selection" using cy.contains("button", "Exercise 6 - Product Selection").click().

- Next, the test performs the following steps to locate and interact with the "Add to Cart" button for the "Gaming Headset" product:

  - It selects all elements with the class product-card using cy.get(".product-card").
  - Within these elements, it searches for the text "Gaming Headset" using contains("Gaming Headset").
  - To ensure it is within the correct product card, it traverses up the DOM tree to the parent element with the class product-card using parents(".product-card").
  - Within this product card, it finds the "Add to Cart" button using the attribute [data-cy="add-button"] with find('[data-cy="add-button"]').
  - Finally, it clicks on the "Add to Cart" button using click().

### 7️⃣ **API Intercept:**

- This test ensures that the POST request sent contains the correct fields and that the API response is valid, verifying both the structure of the request and the response.

- First, the test sets up an interception for POST requests to the URL "https://jsonplaceholder.typicode.com/posts" using cy.intercept. Within the interception function, it verifies that the request body contains the fields "title", "body", and "userId", and that these fields are of the expected type (string for "title" and "body", and number for "userId") using expect. Then, it simulates a response with status 201 and a body that includes an "id" field and the original request data.

- After setting up the interception, the test navigates to the application's main page using cy.visit("/"). Next, it triggers a POST request to the same URL using the fetch function of the window object. The request includes a JSON body with the fields "title", "body", and "userId".

- Finally, the test waits for the intercepted request using cy.wait('@postRequest') and verifies that the response has a status of 201 and that the response body contains the "id" field, which should be a number.

- After setting up the interception, the test navigates to the application's main page using cy.visit("/"). **Note that the main page being visited does not need to be the same page from which the request is triggered**, as Cypress only requires the cy.visit command to proceed with the requests. Next, it triggers a POST request to the same URL using the fetch function of the window object. The request includes a JSON body with the fields "title", "body", and "userId".

## 📂 **Project Structure**
```
technical-test/
│── downloads/          
│── e2e/
│   ├── api-intercept.cy.js
|   ├── checkbox-verification.cy.js
|   ├── element-relation.cy.js
|   ├── find-product.cy.js
|   ├── find-table-elements.cy.js
|   ├── login-command.cy.js
|   ├── product-selection.cy.js
│── screenshots/
│── support/
│   ├── command.js
|   ├── e2e.js
│── node_modules/
│── public/
│── src/
│── .gitignore
│── cypress.config.cjs
│── eslint.config.cjs
│── index.html
│── package.json
│── README.md
|── vite.config.js
```

## 🤖 **Running the tests**


### 1️⃣ **Run in Interactive Mode**
- To open the Cypress Test Runner and execute tests interactively, use:
```sh
npx cypress open
```
- This command launches the Cypress UI, where you can manually select and run test files.
- Ideal for debugging and developing new tests.

### 2️⃣ **Run in Headless Mode**
- To execute all tests automatically in a terminal without opening the UI, use:
```sh
npx cypress run
```
- This will run all available test files in the default browser configured in cypress.config.cjs.
- Recommended for continuous integration (CI/CD) environments.

### 3️⃣ **Run a Specific Test File**
- To run a specific test file in headless mode, use:
```sh
npx cypress run --spec "cypress/e2e/my-test.cy.js"
```
- Replace "cypress/e2e/my-test.cy.js" with the actual path of the test file you want to execute.

### 4️⃣ **Run Tests in a Specific Browser**
- You can specify the browser when running tests:
```sh
npx cypress run --browser chrome
```
- Supported browsers include chrome, firefox, edge, and electron.

### 5️⃣ **Run Tests with a GUI in a Specific Browser**
- If you want to open the Cypress UI and run tests in a specific browser:
```sh
npx cypress open --browser chrome
```
- This allows you to select and execute tests interactively in the chosen browser.

### 6️⃣ **Run Tests in a Headless Mode for a Specific Browser**
- To execute tests headlessly in a specific browser:
```sh
npx cypress run --browser chrome --headless
```
- Useful for running tests faster in CI/CD environments.