# Week 2 Security Report

## Name: Bisma Soomro

## Vulnerabilities Found (Week 1)
- No input validation on email and password
- Passwords stored in plain text
- No authentication system
- No security headers

## Fixes Applied (Week 2)

### 1. Input Validation
- Used validator library
- Email format is now checked
- Password minimum 6 characters required

### 2. Password Hashing
- Used bcrypt library
- Passwords are now hashed before saving
- Salt rounds set to 10

### 3. JWT Authentication
- Used jsonwebtoken library
- Token is generated on login
- User identity is verified with token

### 4. Helmet.js Security Headers
- Used helmet library
- 14+ security headers automatically set
- Protection against XSS and clickjacking

## Result
All 4 security fixes successfully implemented and tested.
