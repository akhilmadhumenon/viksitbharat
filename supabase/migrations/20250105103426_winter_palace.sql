/*
  # Initial Schema Setup

  1. Tables
    - users
      - id (uuid, primary key)
      - role (text)
      - name (text)
    - fund_requests
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - title (text)
      - amount (numeric)
      - description (text)
      - status (text)
    - feedback
      - id (uuid, primary key)
      - title (text)
      - message (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for each role
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  role text NOT NULL CHECK (role IN ('government', 'club_owner')),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Fund requests table
CREATE TABLE fund_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  title text NOT NULL,
  amount numeric NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE fund_requests ENABLE ROW LEVEL SECURITY;

-- Feedback table
CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Club owners can create fund requests"
  ON fund_requests FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'club_owner'
    )
  );

CREATE POLICY "Users can view their own fund requests"
  ON fund_requests FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'government'
    )
  );

CREATE POLICY "Government officials can update fund requests"
  ON fund_requests FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'government'
    )
  );

CREATE POLICY "Anyone can submit feedback"
  ON feedback FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Government officials can view feedback"
  ON feedback FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'government'
    )
  );