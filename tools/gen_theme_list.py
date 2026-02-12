#!/usr/bin/env python3
"""Scan a themes directory and output a JSON array of theme names (no extension).
Excludes theme.css (the base variables file).

Usage: python3 tools/gen_theme_list.py themes > playground/themes.json
"""

import json
import sys
from pathlib import Path

if len(sys.argv) < 2:
    print("Usage: gen_theme_list.py <themes-dir>", file=sys.stderr)
    sys.exit(1)

themes_dir = Path(sys.argv[1])
names = sorted(
    p.stem
    for p in themes_dir.glob("*.css")
    if p.name != "theme.css"
)
print(json.dumps(names))
