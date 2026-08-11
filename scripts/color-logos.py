from pathlib import Path
import re

colors = {
    "amazon": "#FF9900",
    "flipkart": "#047BD5",
    "shopify": "#7AB55C",
    "instagram": "#E4405F",
}
d = Path(__file__).resolve().parents[1] / "public" / "images" / "platforms"
for name, color in colors.items():
    p = d / f"{name}.svg"
    t = p.read_text(encoding="utf-8")
    if "fill=" in t:
        t = re.sub(r'fill="[^"]*"', f'fill="{color}"', t)
    else:
        t = t.replace("<path ", f'<path fill="{color}" ', 1)
        t = t.replace("<path d=", f'<path fill="{color}" d=', 1)
    p.write_text(t, encoding="utf-8")
    print(name, "colored")
