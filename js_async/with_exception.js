async function fetchStudent() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        const student = await response.json();
        console.log("Student Name:", student.name);
    } catch (error) {
        console.log("Something went wrong: ", error.message);
    } finally {
        console.log("Operation finished.");
    }
}
fetchStudent();