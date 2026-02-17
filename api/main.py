from flask import Flask, jsonify

app = Flask(__name__)

students = [
    {
        "regno": "24BCE101",
        "name": "Arjun Kumar",
        "department": "Computer Science",
        "cgpa": 8.7
    },
    {
        "regno": "24BCE102",
        "name": "Priya Sharma",
        "department": "Information Technology",
        "cgpa": 9.1
    }
]


# API - Get All Students => http://127.0.0.1:5000/students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify({
        "status": "success",
        "data": students
    }), 200


# API - Get All Students => http://127.0.0.1:5000/students/24BCE101
@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    for student in students:
        if student["id"] == student_id:
            return jsonify(student), 200

    return jsonify({
        "status": "error",
        "message": "Student not found"
    }), 404


# API - Simulate 500 Internal Server Error
@app.route('/error', methods=['GET'])
def internal_error():
    return jsonify({
        "status": "error",
        "message": "Internal Server Error Simulation"
    }), 500


if __name__ == '__main__':
    app.run(debug=True)
