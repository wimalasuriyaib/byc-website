# MEMORY.md - Long-Term Memory

## User Preferences & Boundaries

### Critical User Preferences (2026-02-15)
**Task Management & Building Systems:**
- **DO NOT build unsolicited systems** - I created a task management system without approval
- **ALWAYS ask for approval first** - Never build/implement anything without explicit user approval
- **Keep it simple** - User prefers simple approaches unless they specifically request complexity
- **No automation without asking** - Don't add auto-checking or automation unless requested

**Communication Style:**
- Direct answers without unnecessary implementation
- Ask before building/automating anything
- Stick to exact requirements without adding extras
- If unsure, ask for clarification

### JIRA Integration (Noted Capability)
User asked about JIRA integration - OpenClaw can integrate via:
1. REST API (read/write issues, update status, add comments)
2. Webhooks (real-time notifications)
3. Browser automation (UI interaction)
4. CSV export/import

**Important:** Only implement if explicitly requested with approval.

### Project Context
**BYC Website (2026-02-15):**
- Updated council section text, icons, and titles
- Added FAQ link to footer
- Implemented sticky navigation header for desktop
- Implemented mobile back-to-top button (300px trigger)
- Removed sticky header on mobile devices
- All images served locally from /images/ folder

**BYC Website (2026-02-16):**
- Implemented "The BYC Playbook Hub" with 10 data-driven articles
- Features: search, modal reading, share buttons, lazy loading
- JSON-based architecture for scalability (add articles without code changes)
- Responsive grid (3 columns desktop, 1 column mobile)

**Server:**
- Running on http://localhost:3000
- Public IP: http://3.81.181.83:3000/
- Task dashboard created but stopped per user request
- Playbook data served from /playbook-data.json

## Lessons Learned
1. **Always ask before building** - Don't assume user wants automation/tools
2. **Respect boundaries** - User sets the scope, I follow it exactly
3. **Simple is better** - Unless user requests complexity, keep it minimal
4. **Explicit approval required** - For any new system, feature, or automation

## Working Style
- Read SOUL.md for persona/behavior
- Read USER.md for user context
- Check memory/YYYY-MM-DD.md for recent work
- Only load MEMORY.md in main sessions (security)
- Write significant events/decisions to memory files