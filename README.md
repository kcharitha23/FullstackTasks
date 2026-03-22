# FullStack Tasks (7 Tasks)

A collection of 7 tasks covering HTML/CSS, JavaScript, Node/Express, MySQL, and database concepts (queries, transactions, triggers, and views).

## Run (for Node/Express tasks)
```bash
npm install
node server.js
```

---

## Task 1: Student Registration & Data Storage
**Description:** Design a Student Registration Form using HTML5 and CSS3 that collects Name, Email, DOB, Department, Phone. Store the data in a database table and retrieve it using `SELECT`.  
**Working:** User fills the form → data is saved into the database → saved students are retrieved using `SELECT` and shown on the page.

---

## Task 2: Data Retrieval & Sorting Dashboard
**Description:** Create a page that displays student or employee records with sorting by name/date, filtering by department, and count of students per department.  
**Working:** Dashboard loads records from DB → user can filter by department and sort by name/date → department-wise count is displayed.

---

## Task 3: Login System with Validation
**Description:** Develop a Login Page, validate inputs using JavaScript, check credentials from database, and show error messages dynamically.  
**Working:** User enters credentials → JS validates inputs → backend checks DB → login success message or dynamic error message is shown.

**Real-Time Usage:** Authentication systems for any web application.

---

## Task 4: Order Management using Joins
**Concepts Used:** Joins, Subqueries, `ORDER BY`, CSS layout  
**Description:** Create tables for Customers, Orders, Products. Display customer order history using `JOIN` queries and a subquery to find highest value order and most active customer.  
**Working:** API runs JOIN query to show order history → subqueries calculate highest value order and most active customer → results are displayed on UI.

**Real-Time Usage:** E-commerce and retail systems.

---

## Task 5: Transaction-Based Payment Simulation
**Description:** Simulate an online payment process: deduct balance from user account, add amount to merchant account, use `COMMIT` on success and `ROLLBACK` on failure.  
**Working:** Payment request starts a DB transaction → user balance is deducted and merchant balance is added → `COMMIT` on success / `ROLLBACK` on any failure.

**Real-Time Usage:** Banking and digital payment applications.

---

## Task 6: Automated Logging using Triggers & Views
**Description:** A trigger that logs every `INSERT` or `UPDATE`, and a view that shows daily activity reports.  
**Working:** Any insert/update automatically creates a log entry via trigger → a view summarizes logs into daily activity output for reporting.

**Real-Time Usage:** Audit logging in enterprise databases.

---

## Task 7: Interactive Web Form with Events & Functions
**Description:** Build an interactive feedback form: validate inputs on keypress, highlight fields on mouse hover, show confirmation on double-click submit, use JS functions for reusable validation logic.  
**Working:** Keypress validates input live → hover highlights fields → double-click submit shows confirmation → reusable JS functions handle validation.

**Real-Time Usage:** Customer feedback and survey systems.
