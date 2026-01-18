# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextUp is a full-stack task management application:
- **Backend**: Rails 8 API-only app with GraphQL (Ruby 3.4.4)
- **Frontend**: React 19 with React Router 7 in `/client` directory
- **Database**: PostgreSQL
- **Communication**: GraphQL endpoint at `http://localhost:3001/graphql`

## Common Commands

### Backend (Rails)
```bash
bin/rails server              # Start Rails server (port 3001)
bin/rails test                # Run all tests
bin/rails test test/models/task_test.rb  # Run single test file
bin/rails test test/models/task_test.rb:10  # Run specific test at line
bin/rails db:migrate          # Run migrations
bin/rails db:test:prepare     # Prepare test database
bin/rubocop -f github         # Lint Ruby code
bin/brakeman --no-pager       # Security scan
```

### Frontend (client/)
```bash
npm run dev                   # Start dev server
npm run build                 # Build for production
npm run typecheck             # TypeScript type checking
npm run lint                  # ESLint
npm run lint:fix              # ESLint with auto-fix
npm run format                # Format with Prettier
npm run format:check          # Check formatting
```

## Architecture

### GraphQL API
- Single endpoint: `POST /graphql` handled by `GraphqlController`
- Schema defined in `app/graphql/nextup_schema.rb`
- Query types in `app/graphql/types/query_type.rb`
- Mutations in `app/graphql/mutations/`
- Uses Relay-style node interface for object identification

### Frontend Structure
- Apollo Client configured in `client/app/lib/apollo.ts`
- Root layout with ApolloProvider in `client/app/root.tsx`
- Routes in `client/app/routes/`
- Styling with Tailwind CSS v4

### Key Integration Points
- Frontend queries backend via Apollo Client at `http://localhost:3001/graphql`
- CORS configured via `rack-cors` gem
- Both servers must run simultaneously for local development
