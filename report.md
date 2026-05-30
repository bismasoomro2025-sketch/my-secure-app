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

## Week 3 Tasks

### 1. Penetration Testing (Nmap)
- Nmap scan kiya localhost pe
- Port 3000 open mila (Express server)
- Koi unauthorized ports nahi mile

### 2. Winston Logging
- security.log file ban gayi
- Register aur login events log ho rahe hain
- Warnings bhi log ho rahi hain

### 3. Security Checklist
- Validate all inputs ✅
- Hash and salt passwords ✅
- Use JWT authentication ✅
- Set security headers ✅
- Enable logging ✅
