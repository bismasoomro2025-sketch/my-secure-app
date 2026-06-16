# Ethical Hacking Report — Week 5

**Intern:** Bisma Soomro
**Internship:** DevelopersHub — Cybersecurity
**Date:** June 2026
**Target:** OWASP Juice Shop (test environment) & Custom Node.js App

---

## 1. Scope & Objective

This report documents penetration testing activities performed on a controlled
test environment (OWASP Juice Shop) and a custom Node.js application, with the
goal of identifying and remediating common web application vulnerabilities:
SQL Injection (SQLi) and Cross-Site Request Forgery (CSRF).

**Disclaimer:** All testing was performed on a local, isolated test environment
with no real user data, strictly for educational purposes.

---

## 2. Reconnaissance

### Tool Used: Nmap

```bash
nmap -sV localhost
```

**Findings:**
- Port 3000/tcp open, running a Node.js/Express web service
- Service banner revealed the application as OWASP Juice Shop
- Headers observed: X-Content-Type-Options, X-Frame-Options already present

---

## 3. SQL Injection Vulnerability

### 3.1 Detection — SQLMap

```bash
sqlmap -u "http://localhost:3000/rest/user/login" \
--data='{"email":"test","password":"test"}' \
--headers="Content-Type: application/json" \
--ignore-code=401 --level=5 --risk=3 --technique=BEU --batch
```

**Result:**
