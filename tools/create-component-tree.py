#!/usr/bin/env python3

import sys
import os
import json

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python create-component-tree.py <base_dir>", file=sys.stderr)
        sys.exit(1)

    base_dir = sys.argv[1]
    tree = []

    for name in sorted(os.listdir(base_dir)):
        comp_dir = os.path.join(base_dir, name)
        if not os.path.isdir(comp_dir):
            continue
        files = sorted(
            f for f in os.listdir(comp_dir)
            if f.endswith(".html") and f != "index.html"
        )
        if files:
            tree.append({"name": name, "files": files})

    print(json.dumps(tree, indent=2))
