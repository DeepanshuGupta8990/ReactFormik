# Getting Started with Create React App - https://64cccad274696f77f34ba259--venerable-rugelach-bceec0.netlify.app/
This repository contains a simple React application that demonstrates how to use Formik, a popular library for managing forms in React. The application consists of a form with various input fields and validation logic. The user can enter their details, and the form is validated before submitting the data.

Technologies Used
React: A JavaScript library for building user interfaces.
Formik: A form library for React that simplifies form handling and validation.
Yup: A JavaScript schema builder for form validation.
Styled-components: A CSS-in-JS library for styling React components.
How to Run the Application
Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project folder:

bash
Copy code
cd <project-folder>
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000 in your web browser.

Features
The form includes various input fields, such as name, email, channel, address, social media profiles, and phone numbers.
The form includes client-side validation using Formik and Yup. Validation rules are specified for each input field, and error messages are displayed for invalid inputs.
The user can add and remove additional phone numbers using the "List of phone numbers" section.
The form includes a custom validation function for the "Comments" field to demonstrate custom validation logic.
The form includes buttons for submitting the form, resetting the form, and manually triggering validation for specific fields (currently commented out).
Usage
Start by filling out the form with your details. Observe how the validation works when you try to submit the form with missing or invalid data.
Try entering different values in the fields to see how the validation rules are applied.
Test the custom validation for the "Comments" field by leaving it empty and submitting the form.
Experiment with adding and removing phone numbers using the "List of phone numbers" section.
Additional Notes
The form's initial values are provided in the initialValues object.
The form can be initialized with saved values (provided in the savedValues object) using the "Load saved data" button (currently commented out).
The onSubmit function is responsible for handling the form submission. It logs the form data to the console and displays a toast notification on successful submission.
The form styling is managed using styled-components, providing a clean and responsive design.
Conclusion
This project showcases a basic implementation of a React form using Formik and Yup for validation. You can build upon this example to create more complex forms with additional features based on your specific requirements. Formik's rich set of features, along with Yup's powerful validation capabilities, make managing forms in React a much smoother experience. Happy coding!
