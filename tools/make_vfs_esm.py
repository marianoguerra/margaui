#!/usr/bin/env python3

import sys
import glob
import os
import json

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python make_vfs_esm.py <glob1> [glob2] ...")
        sys.exit(1)

    entries = {}
    for arg in sys.argv[1:]:
        if '=' in arg:
            # Explicit alias: key=path
            key, path = arg.split('=', 1)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            entries[key] = content
        else:
            # Glob pattern
            for path in glob.glob(arg, recursive=True):
                if os.path.isfile(path):
                    rel_path = "./" + os.path.relpath(path)
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    entries[rel_path] = content

    json_str = json.dumps(entries, indent=2)
    print(f"export const entries = {json_str};")