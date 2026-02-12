#!/usr/bin/env python3
"""Check that entry.css imports match actual files in src/."""

import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
entry = root / "entry.css"
src_dir = root / "src"

# Actual CSS files in src/
actual = {f"./src/{f.name}" for f in sorted(src_dir.glob("*.css"))}

# Imports in entry.css that reference src/
imported = set()
for line in entry.read_text().splitlines():
    m = re.match(r'@import\s+"(\./src/[^"]+)"', line)
    if m:
        imported.add(m.group(1))

missing = sorted(actual - imported)
extra = sorted(imported - actual)

ok = True
if missing:
    print("Files in src/ missing from entry.css:")
    for f in missing:
        print(f"  + {f}")
    ok = False

if extra:
    print("Imports in entry.css with no matching file:")
    for f in extra:
        print(f"  - {f}")
    ok = False

if ok:
    print("entry.css is in sync with src/")

sys.exit(0 if ok else 1)
