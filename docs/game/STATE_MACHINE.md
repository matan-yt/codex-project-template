# HivePlay — STATE_MACHINE

**Document:** STATE_MACHINE.md  
**Status:** Living Document

---

# Purpose

Defines the valid runtime states for a HivePlay game session and the allowed transitions.

---

# Session States

```text
CREATED
   ↓
LOBBY
   ↓
READY
   ↓
RUNNING
   ↙     ↘
PAUSED  FINISHED
   ↓
RUNNING
```

## CREATED
- Session created
- No players connected

Allowed transitions:
- LOBBY

## LOBBY
- Teams joining
- Host can configure session

Allowed transitions:
- READY
- FINISHED

## READY
- Teams connected
- Waiting for host

Allowed transitions:
- RUNNING
- LOBBY

## RUNNING
Gameplay active.

Substates:

```text
WAITING_FOR_TILE
      ↓
QUESTION_ACTIVE
      ↓
WAITING_FOR_ANSWERS
      ↓
RESOLVING
      ↓
CHECKING_WIN
      ↓
WAITING_FOR_TILE
```

### WAITING_FOR_TILE
Active team selects a tile.

### QUESTION_ACTIVE
Question/media displayed and timer starts.

### WAITING_FOR_ANSWERS
Both teams may answer.

### RESOLVING
Server validates answers and updates tile ownership.

### CHECKING_WIN
Evaluate winning path. If none exists, return to WAITING_FOR_TILE.

## PAUSED
Gameplay frozen.
May transition only to:
- RUNNING
- FINISHED

## FINISHED
Terminal state.
No further gameplay actions allowed.

---

# Invalid Actions

- Join after RUNNING (unless reconnect)
- Select burned tile
- Submit answer after timeout
- Multiple answers from same device
- Modify game template during session

---

# Reconnection

A reconnecting client restores the current session state and active substate.

---

# Source of Truth

All state transitions are performed by the server only.
