# SDB Bank Annual Report Hub - Supabase Security Specification

## 1. Data Invariants & Row-Level Security (RLS)

Our system enforces attribute-based access controls (ABAC) and state integrity across all Supabase PostgreSQL tables:

1.  **Global Branding Config (`public.branding`)**
    *   **Read Access**: Accessible to all users (both anonymous and authenticated) so the report renders with correct custom themes instantly.
    *   **Write Access**: Restricted to administrative access or authorized backend synchronization.

2.  **User Strategic Feedback (`public.feedback`)**
    *   **Create Access**: Any reader can submit feedback (we support both anonymous and authenticated users since this is a public annual report).
    *   **Read Access**: Admins and authorized roles can list and review all feedback submissions in the Admin Console.
    *   **Delete Access**: Deletion permitted for administrators managing submissions from the Admin Portal.

3.  **Personal Disclosures Bookmarks (`public.bookmarks`)**
    *   **Owner Privacy**: Bookmarks are private to each individual user session, mapped by `user_id`.
    *   **Read/Write/Delete**: Permitted for the bookmark owner matching `user_id`.

4.  **Assistant Conversation History (`public.chats`)**
    *   **Privacy**: Chat logs contain private user interaction details.
    *   **Read/Write/Upsert**: Allowed for the owning user matching `user_id`.

---

## 2. Supabase Migration & Schema Script

The complete table definitions, indexes, and RLS policies are available in:
- [`supabase_schema.sql`](file:///c:/Users/ASUS/Documents/SDB-AR-2025/supabase_schema.sql)

This script can be executed directly in the [Supabase SQL Editor](https://supabase.com/dashboard/project/yaefjxsrsyrrrxwkmslq/sql).
