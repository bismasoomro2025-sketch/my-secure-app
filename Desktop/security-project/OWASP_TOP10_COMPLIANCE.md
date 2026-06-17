# OWASP Top 10 Compliance Check — Week 6

**Project:** security-project & OWASP Juice Shop (test environment)
**Date:** June 2026

---

## Mapping of Findings to OWASP Top 10 (2021)

| OWASP Category | Status | Evidence |
|---|---|---|
| A01: Broken Access Control | ⚠️ Found (Juice Shop) | Admin login bypass via SQLi (Week 5) |
| A02: Cryptographic Failures | ✅ Mitigated | HSTS enforced via Helmet.js (Week 4) |
| A03: Injection | ⚠️ Found & Fixed | SQL Injection in login route — fixed with prepared statements (Week 5) |
| A04: Insecure Design | ℹ️ Noted | Juice Shop intentionally vulnerable (test app) |
| A05: Security Misconfiguration | ⚠️ Found | Missing CSP/HSTS/X-Frame-Options on Juice Shop (ZAP, Nikto) |
| A06: Vulnerable Components | ⚠️ Found | npm audit revealed 54 vulnerabilities in Juice Shop dependencies (4 low, 21 moderate, 24 high, 5 critical) including lodash (critical), tar (high), ws (high) |
| A07: Authentication Failures | ⚠️ Found & Fixed | No rate limiting on login originally — fixed with express-rate-limit (Week 4) |
| A08: Software/Data Integrity Failures | ✅ Mitigated | CSRF protection added with csurf middleware (Week 5) |
| A09: Security Logging Failures | ⚠️ Partial | Fail2Ban logs failed SSH attempts; app-level logging not extensive |
| A10: Server-Side Request Forgery | ℹ️ Not tested | Out of scope for this engagement |

---

## Summary

| Status | Count |
|---|---|
| Found & Fixed | 3 |
| Mitigated (proactively secured) | 2 |
| Found (in test app, not fixed — demonstration only) | 2 |
| Informational / Out of scope | 3 |

---

## Tools Used for This Assessment

- OWASP ZAP — automated web app scanning (12 alerts)
- Nikto — web server misconfiguration scanning
- Lynis — OS-level hardening audit (score: 64/100)
- SQLMap — SQL injection detection
- Manual testing — curl-based exploitation and verification

---

## Conclusion

The application stack was assessed against the OWASP Top 10 (2021) framework.
Critical vulnerabilities (SQL Injection, missing rate limiting, missing CSRF
protection) were identified and remediated in the custom `security-project`
application. The OWASP Juice Shop test application retains several
intentional vulnerabilities (by design) which were used purely for
educational exploitation exercises and are documented for awareness, not
remediation, as fixing them would alter the nature of the training app.
