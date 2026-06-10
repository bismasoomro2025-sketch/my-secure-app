# Security Project — Week 4

## Overview
This project implements advanced security measures including intrusion detection,
API security hardening, and security headers.

---

## Task 1: Intrusion Detection & Monitoring (Fail2Ban)

### Installation
```bash
sudo apt install fail2ban -y
sudo systemctl start fail2ban
sudo systemctl enable fail2ban
```

### Configuration
Created `/etc/fail2ban/jail.local` with SSH jail:
- Max retries: 5 attempts
- Ban time: 3600 seconds (1 hour)
- Find time: 600 seconds (10 minutes)

### Result
- SSH jail active and monitoring
- Auto-ban on 5 failed login attempts

---

## Task 2: API Security Hardening

### Packages Used
- `express` — Web framework
- `express-rate-limit` — Brute force protection
- `helmet` — Security headers
- `cors` — Cross-origin resource sharing

### Rate Limiting
- Global API: 100 requests per 15 minutes
- Login route: 5 attempts per 10 minutes
- Returns 429 status on limit exceeded

### Test Result
After 5 failed login attempts:
{"status":429,"error":"Too many login attempts, please try again after 10 minutes."}

---

## Task 3: Security Headers & CSP

### Headers Implemented via Helmet.js

| Header | Purpose |
|--------|---------|
| Content-Security-Policy | Prevents XSS attacks |
| Strict-Transport-Security | Enforces HTTPS for 1 year |
| X-Frame-Options | Prevents clickjacking |
| X-Content-Type-Options | Prevents MIME sniffing |
| Referrer-Policy | Protects user privacy |

---

## How to Run

```bash
npm install
node index.js
```

---

## Tools Used
- Fail2Ban
- Node.js v24
- express-rate-limit
- Helmet.js
- Kali Linux (VM)

---

## Intern
Name: Bisma Soomro
Internship: DevelopersHub Cybersecurity
Week: 4 of 6
Deadline: 30 June 2026
