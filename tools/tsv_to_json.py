import csv
import json
import pathlib

# glossary-web フォルダを基準にする
ROOT = pathlib.Path(__file__).resolve().parent.parent

tsv_path = ROOT / "terms.tsv"
json_path = ROOT / "terms.json"

items = []

with tsv_path.open("r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter="\t")
    for row in reader:
        key = (row.get("key") or "").strip()
        if not key:
            continue

        items.append({
            "key": key,
            "meaning": (row.get("meaning") or "").strip(),
            "note": (row.get("note") or "").strip()
        })

with json_path.open("w", encoding="utf-8") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)

print(f"OK: {len(items)} terms -> {json_path}")
