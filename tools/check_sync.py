#!/usr/bin/env python3
"""Check that entry.css imports match actual files in src/ and base/.

themes/ is not checked here: entry.css only ever imports the default
themes/theme.css bundle (light + dark) by design, and every other theme
file is discovered dynamically by tools/gen_theme_list.py, so there is
no manual registration step to drift out of sync.
"""

import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
entry = root / "entry.css"

DIRS = ["src", "base"]

# Imports in entry.css, grouped by the directory they reference
imported = {name: set() for name in DIRS}
for line in entry.read_text().splitlines():
    m = re.match(r'@import\s+"\./([^/]+)/([^"]+)"', line)
    if m and m.group(1) in imported:
        imported[m.group(1)].add(f"./{m.group(1)}/{m.group(2)}")

ok = True
for name in DIRS:
    actual = {f"./{name}/{f.name}" for f in sorted((root / name).glob("*.css"))}
    missing = sorted(actual - imported[name])
    extra = sorted(imported[name] - actual)

    if missing:
        print(f"Files in {name}/ missing from entry.css:")
        for f in missing:
            print(f"  + {f}")
        ok = False

    if extra:
        print(f"Imports in entry.css with no matching file in {name}/:")
        for f in extra:
            print(f"  - {f}")
        ok = False

if ok:
    print("entry.css is in sync with src/ and base/")

sys.exit(0 if ok else 1)
