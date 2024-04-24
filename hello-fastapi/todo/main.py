# from fastapi import FastAPI
# import uvicorn

# app = FastAPI()

# @app.get("/")
# def hello():
#     print("hello")
#     return "1st func"

# @app.get("/2ndfunc/{id}")
# def func():
#     print("hello2")
#     return id

# @app.post("/3rdfunc")
# def func1():
#     print("hello3")
#     return "func"

# @app.post("/3rdfunc1")
# def func1():
#     print("hello3")
#     return "func"

# def start():
#     uvicorn.run("todo.main:app", host="127.0.0.1", port=8080, reload=True)

# if __name__ == "__main__":
#     start()



from fastapi import FastAPI
import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

# Create an instance of the FastAPI class
app = FastAPI()

# Define a model for the student data
class Student(BaseModel):
    id: int
    _name: str
    age: int
    grade: str

# Create an in-memory list to store student data
students_db = []

# Function to get all students
@app.get("/students", response_model=List[Student])
def get_students():
    return students_db

# Function to get a specific student by ID
@app.get("/students/{student_id}", response_model=Student)
def get_student(student_id: int):
    for student in students_db:
        if student["id"] == student_id:
            return student
    raise HTTPException(status_code=404, detail="Student not found")

# Function to add a new student
@app.post("/students", response_model=Student)
def add_student(student: Student):
    students_db.append(student.dict())
    return student

# Function to update a student
@app.put("/students/{student_id}", response_model=Student)
def update_student(student_id: int, student: Student):
    for s in students_db:
        if s["id"] == student_id:
            s.update(student.dict())
            return s
    raise HTTPException(status_code=404, detail="Student not found")

# Function to delete a student
@app.delete("/students/{student_id}")
def delete_student(student_id: int):
    for i, student in enumerate(students_db):
        if student["id"] == student_id:
            del students_db[i]
            return {"message": "Student deleted successfully"}
    raise HTTPException(status_code=404, detail="Student not found")

def start():
    uvicorn.run("todo.main:app", host="127.0.0.1", port=8080, reload=True)

if __name__ == "__main__":
    start()