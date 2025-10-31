# Student Grading System

def calculate_grade(marks):
    """Return the grade based on marks."""
    if marks >= 90:
        return "A+"
    elif marks >= 80:
        return "A"
    elif marks >= 70:
        return "B"
    elif marks >= 60:
        return "C"
    elif marks >= 50:
        return "D"
    else:
        return "F"

def main():
    print("=== Student Grading System ===")

    num_students = int(input("Enter number of students: "))
    student_data = {}

    for i in range(num_students):
        name = input(f"\nEnter name of student {i+1}: ")
        marks = float(input(f"Enter marks (0–100) for {name}: "))

        grade = calculate_grade(marks)
        student_data[name] = {'Marks': marks, 'Grade': grade}

    # Display all student results
    print("\n=== Results ===")
    for name, info in student_data.items():
        print(f"{name}: Marks = {info['Marks']}, Grade = {info['Grade']}")

if __name__ == "__main__":
    main()
    
