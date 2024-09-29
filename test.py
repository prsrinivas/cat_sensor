import random

def generate_random_binary_messages(num_lines, filename):
    with open(filename, 'w') as file:
        for _ in range(num_lines):
            # Generate a random 3-digit binary number
            message = ''.join(random.choice('01') for _ in range(3))
            file.write(f"{message}\n")

# Specify the number of lines and filename
num_lines = random.randint(100, 1000)  # Randomly select a number of lines between 100 and 1000
filename = 'test_cases.txt'  # You can change the filename if needed

# Generate the file
generate_random_binary_messages(num_lines, filename)

print(f"Generated {num_lines} lines of random binary messages in '{filename}'.")