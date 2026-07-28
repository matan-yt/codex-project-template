# HivePlay — DATABASE_SCHEMA

**Document:** DATABASE_SCHEMA.md  
**Status:** Living Document

---

# Purpose

Physical database schema reference for implementation.

---

# Core Tables

## users

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| name | text | |
| email | text UNIQUE | |
| role | text | admin / host |
| created_at | timestamptz | |

---

## categories

| Column | Type |
|---|---|
| id | uuid PK |
| name | text |
| description | text |
| sort_order | int |

---

## media

| Column | Type |
|---|---|
| id | uuid PK |
| type | text |
| storage_path | text |
| metadata | jsonb |
| created_at | timestamptz |

---

## questions

| Column | Type |
|---|---|
| id | uuid PK |
| category_id | uuid FK categories |
| media_id | uuid FK media NULL |
| title | text |
| question_type | text |
| difficulty | smallint |
| created_at | timestamptz |

Index:
- category_id

---

## answers

| Column | Type |
|---|---|
| id | uuid PK |
| question_id | uuid FK questions |
| label | text |
| is_correct | boolean |
| display_order | smallint |

Index:
- question_id

---

## games

| Column | Type |
|---|---|
| id | uuid PK |
| name | text |
| description | text |
| status | text |
| published_at | timestamptz |

---

## board_tiles

| Column | Type |
|---|---|
| id | uuid PK |
| game_id | uuid FK games |
| position | int |
| question_pool | jsonb |

Unique:
- (game_id, position)

---

## sessions

| Column | Type |
|---|---|
| id | uuid PK |
| game_id | uuid FK games |
| status | text |
| started_at | timestamptz |
| completed_at | timestamptz |

---

## teams

| Column | Type |
|---|---|
| id | uuid PK |
| session_id | uuid FK sessions |
| name | text |
| color | text |
| score | int |

---

## tile_state

| Column | Type |
|---|---|
| id | uuid PK |
| session_id | uuid FK sessions |
| tile_id | uuid FK board_tiles |
| owner_team_id | uuid FK teams NULL |
| state | text |

Unique:
- (session_id, tile_id)

---

## responses

| Column | Type |
|---|---|
| id | uuid PK |
| session_id | uuid FK sessions |
| team_id | uuid FK teams |
| question_id | uuid FK questions |
| answer_id | uuid FK answers |
| response_time_ms | int |
| is_correct | boolean |
| submitted_at | timestamptz |

Indexes:
- session_id
- question_id
- team_id

---

## events

| Column | Type |
|---|---|
| id | uuid PK |
| session_id | uuid FK sessions |
| event_type | text |
| payload | jsonb |
| created_at | timestamptz |

Index:
- session_id
- created_at
