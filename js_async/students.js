// Test GET /students (200 OK)
async function fetchAllStudents() {
    try {
        const response = await fetch("http://127.0.0.1:5000/students");

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();
        console.log("All Students:", data.data);

    } catch (error) {
        console.log("Error fetching students:", error.message);
    } finally {
        console.log("fetchAllStudents finished.\n");
    }
}


// Test GET /students/10 (404)
async function fetchStudentById() {
    try {
        const response = await fetch("http://127.0.0.1:5000/students/10");

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const student = await response.json();
        console.log("Student:", student);

    } catch (error) {
        console.log("Student not found or error occurred:", error.message);
    } finally {
        console.log("fetchStudentById finished.\n");
    }
}


// Test GET /error (500)
async function testInternalError() {
    try {
        const response = await fetch("http://127.0.0.1:5000/error");

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const result = await response.json();
        console.log("Result:", result);

    } catch (error) {
        console.log("Internal Server Error caught:", error.message);
    } finally {
        console.log("testInternalError finished.\n");
    }
}


// Run all tests sequentially
async function runTests() {
    await fetchAllStudents();
    await fetchStudentById();
    await testInternalError();
}

runTests();
