from flask import Flask, request, jsonify, make_response

app = Flask(__name__)

# Route for summing an array of numbers
@app.route('/sum', methods=['POST'])
def sum_array():
    try:
        # Get the array of numbers from the request
        numbers = request.json['numbers']
        
        # Check if the input is a list
        if type(numbers) != list:
            raise ValueError('Invalid input: Provide an array of numbers')
        
        # Calculate the sum of the numbers and Return the result as JSON
        result = sum(numbers)
        response = make_response(jsonify({'result': result}), 200)
        return response
    
    # If there's an error, return an error message as JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Route for concatenating two strings
@app.route('/concatenate', methods=['POST'])
def concatenate_strings():
    try:
        # Get the data from the request
        data = request.json
        
        # Check if the input is a dictionary with two keys: 'stringOne' and 'stringTwo'
        if type(data) != dict or 'stringOne' not in data or 'stringTwo' not in data:
            raise ValueError('Invalid input: Provide 2 strings as stringOne and stringTwo')
        
        # Get the two strings from the dictionary
        stringOne = data['stringOne']
        stringTwo = data['stringTwo']
        
        # Concatenate the two strings and Return the result as JSON
        result = stringOne + stringTwo

        response = make_response(jsonify({'result': result}), 200)
        return response
    
    # If there's an error, return an error message as JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 400