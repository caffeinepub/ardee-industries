# Specification

## Summary
**Goal:** Build a responsive marketing website for ARDEE INDUSTRIES (aluminum can trading) with core informational pages, an inquiry submission flow with backend persistence, and an admin area to review inquiries.

**Planned changes:**
- Create a responsive site layout with clear navigation and English copy, using a consistent non-blue/purple visual theme.
- Implement Home, Trading, About, and Contact/Inquiry pages/sections with domain-relevant content.
- Add an Inquiry form with required fields, client-side validation, consent checkbox, and success/error states.
- Implement Motoko backend persistence in a single main actor: createInquiry plus admin-only listInquiries and getInquiry access.
- Add an admin frontend area using Internet Identity login to list inquiries (most recent first) and view inquiry details.
- Add generated static assets under `frontend/public/assets/generated` and display at least the logo and hero image in the UI.

**User-visible outcome:** Visitors can browse ARDEE INDUSTRIES pages and submit an aluminum can trading inquiry; an authenticated admin can log in to view submitted inquiries and open each inquiry’s details.
