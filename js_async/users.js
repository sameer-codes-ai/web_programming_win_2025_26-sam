async function fetchUsers() {
    try {
        console.log("Fetching users...");
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        console.log("User List: ", users);
    } catch (error) {
        console.log("Error occurred: ", error.message);
    } finally {
        console.log("Request completed.");
    }
}
fetchUsers();