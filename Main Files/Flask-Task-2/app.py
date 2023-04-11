from flask import Flask, request, jsonify
import bcrypt

app = Flask(__name__)
# Create dictionary for databas`e
db = {}

@app.route('/register', methods=['POST'])
def register():
    # Get username and password from request body
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    # Check if username and password are present in request body
    if not username:
        return "Enter the Username", 400
    if not password:
        return "Enter the Password", 400
    
    # Hash the password using bcrypt
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
    # Store the hashed password in a dictionary with username as key
    db[username] = hashed

    return 'User has been successfully registered!', 200

@app.route('/login', methods=['POST'])
def login():
    # Get username and password from request body
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    # Check if username and password are present in request body
    if not username:
        return "Enter the Username", 400
    if not password:
        return "Enter the Password", 400
    
    # Check if username exists in database
    if username not in db:
        return "Username not found", 404
    
    # Get hashed password from database for given username
    hash = db.get(username)

    # Check if entered password matches hashed password in database using bcrypt
    if bcrypt.checkpw(password.encode('utf-8'),hash):
        return "Access Granted", 200
    else:
        return "Access Denied", 400