# Docker Security Best Practices — Week 6

**Note:** Docker was not installed/run in this VM due to limited system
resources (1.9GB RAM). This document covers the secure Dockerfile design
and the container security practices that would be applied during
deployment.

---

## 1. Secure Dockerfile Design

See `Dockerfile` in this repository. Key decisions:

| Practice | Why |
|---|---|
| Specific base image tag (`node:20-alpine`), not `latest` | Ensures reproducible builds; `latest` can silently change and introduce breaking/vulnerable versions |
| Alpine-based image | Smaller image size = smaller attack surface, fewer pre-installed packages/binaries |
| Non-root user (`appuser`) | If the container is compromised, the attacker does not get root inside the container |
| `npm ci --only=production` | Installs exact locked versions, skips dev dependencies (smaller image, fewer packages to scan) |
| `chown` before `USER` switch | Ensures the non-root user actually has permission to run the app |
| Explicit `EXPOSE` of only the needed port | Documents and limits the container's network surface |
| Explicit `CMD` (not shell form) | Avoids shell injection risks in the entrypoint |

---

## 2. Container Image Scanning

Before deploying any image, it should be scanned for known vulnerabilities.
Recommended approach:

```bash
docker scout cves my-secure-app:latest
```

or, using Trivy (a popular open-source scanner):

```bash
trivy image
