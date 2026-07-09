# SDB Bank Annual Report Hub - Firebase Security Specification

## 1. Data Invariants

Our system enforces strict attribute-based access controls (ABAC) and state integrity across all Firestore paths:

1.  **Global Branding Config (`/branding/{docId}`)**
    *   **Read Access**: Accessible to all users (both anonymous and authenticated) so the report renders with correct custom themes instantly.
    *   **Write Access**: Restricted strictly to Admin. Non-admins or unauthenticated users must be blocked from altering any corporate branding attributes.
    *   **Structure**: Must have valid hex colors and restricted image URLs.

2.  **User Strategic Feedback (`/feedback/{feedbackId}`)**
    *   **Create Access**: Any reader can submit feedback (we support anonymous/signed-in users since this is a public annual report). The `userId` field must match `request.auth.uid` if they are authenticated, or be set to `'anonymous'`.
    *   **Read Access**: Only the submitting user (if authenticated) can read their own feedback, and Admins can list and read all feedback.
    *   **Update/Delete**: Strictly forbidden once submitted (append-only ledger of feedback) to prevent readers from deleting or falsifying historic submissions.

3.  **Personal Disclosures Bookmarks (`/bookmarks/{bookmarkId}`)**
    *   **Owner Privacy**: Bookmarks are strictly private to each individual user.
    *   **Read/List/Write**: Allowed only if `request.auth.uid` is not null and exactly matches the document's `userId`.
    *   **Validation**: The `userId` must match `request.auth.uid` on write, and are immutable on update.

4.  **Assistant Conversation History (`/chats/{chatId}`)**
    *   **Privacy**: Chat logs contain private user interaction details.
    *   **Read/List/Write**: Allowed only if the authenticated user's ID matches the chat document's `userId`.
    *   **Timestamps**: `updatedAt` must be set to `request.time`.

---

## 2. The "Dirty Dozen" Poison Payloads

The following payloads represent specific exploits attempting to bypass identity verification, escalate privileges, poison visual themes, or inject malicious payloads. Security rules must explicitly block each of these.

### Category A: Branding Exploits
1.  **Payload #1 (Branding Identity Hijack)**: An unauthenticated attacker attempts to overwrite `/branding/global` with custom text.
2.  **Payload #2 (Branding Spoofing)**: A regular user (not admin) attempts to modify `/branding/global` setting `logoColor` to neon green to deface the bank's portal.
3.  **Payload #3 (Size Exhaustion Attack)**: A user attempts to update branding config with a 10MB base64 string for the `logoImage` field to trigger Denial of Wallet.

### Category B: Feedback Integrity Breach
4.  **Payload #4 (Feedback Hijack)**: User `attacker123` attempts to create a feedback document with `userId: "victim456"` to spoof feedback on behalf of someone else.
5.  **Payload #5 (Feedback Modification)**: An attacker attempts to `update` an existing feedback document (`/feedback/fb999`) to change their negative rating from `1` to `5`.
6.  **Payload #6 (Feedback Erasure)**: An attacker attempts to `delete` a highly critical piece of feedback to keep ratings artificially high.

### Category C: Bookmark Espionage & Leakage
7.  **Payload #7 (Bookmark Espionage)**: User `attacker123` attempts to `get` bookmark `/bookmarks/bk456` belonging to `userId: "victim456"`.
8.  **Payload #8 (Bookmark Shadow Creation)**: User `attacker123` attempts to create a bookmark `/bookmarks/bk789` but sets `userId: "victim456"` to clutter another user's saved list.
9.  **Payload #9 (Bookmark Key Pollution)**: An authenticated user attempts to write a bookmark containing custom un-schema'd keys (e.g. `isVerifiedAdmin: true`) to bypass validation.

### Category D: Chat Log Hijacking & Resource Abuse
10. **Payload #10 (Chat Espionage)**: An authenticated user attempts to `list` all chats in `/chats` without a where clause filtering by their own `userId`, hoping to scrape other users' conversations.
11. **Payload #11 (Chat History Spoofing)**: User `attacker123` attempts to write messages to `/chats/chat999` which is owned by `userId: "victim456"`.
12. **Payload #12 (Immortality Bypass)**: An attacker attempts to manually update a chat's `createdAt` field after creation to corrupt temporal auditing.

---

## 3. Test Runner Specification

The test runner verified that all "Dirty Dozen" payloads fail with `PERMISSION_DENIED` using the standard `@firebase/rules-unit-testing` or visual simulator behavior. All tests must be handled inside `firestore.rules`.
