# 📋 Test Cases Documentation

## User API Test Cases

### TC01: Get Valid User
**Description**: Verify getting existing user returns correct data
**Preconditions**: User ID 2 exists
**Test Steps**:
1. Send GET /users/2
2. Verify status code 200
3. Validate response schema
4. Verify user data completeness

**Expected Results**:
- Status: 200 OK
- Response contains user details
- Data types are correct

### TC02: Get Invalid User
**Description**: Verify non-existent user returns 404
**Test Steps**:
1. Send GET /users/999
2. Verify status code 404

**Expected Results**: 404 Not Found

### TC03: Create New User
**Description**: Verify user creation functionality
**Test Steps**:
1. Send POST /users with valid data
2. Verify status code 201
3. Validate response contains ID

**Expected Results**:
- Status: 201 Created
- Response contains generated ID