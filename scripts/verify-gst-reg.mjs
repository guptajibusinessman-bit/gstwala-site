import http from "http";

function get(path) {
  return new Promise((resolve, reject) => {
    http
      .get(`http://127.0.0.1:3000${path}`, (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve({ status: res.statusCode, body: d }));
      })
      .on("error", reject);
  });
}

const { status, body } = await get("/gst-registration");
const title = (body.match(/<title>([^<]+)/) || [])[1];
const desc = (body.match(/name="description" content="([^"]+)/) || [])[1];
const can = (body.match(/rel="canonical" href="([^"]+)/) || [])[1];
const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) =>
  m[1].replace(/\s+/g, " ").trim()
);
const faqPage = body.includes('"@type":"FAQPage"') || body.includes('"@type": "FAQPage"');
const hasRupee = body.includes("\u20B9");
const bad = body.match(/guaranteed approval|guaranteed processing time|guaranteed GST/gi);
const wa = (body.match(/wa\.me\/\d+/g) || []).slice(0, 3);
const tel = (body.match(/tel:[^"'>\s]+/g) || []).slice(0, 3);

console.log(
  JSON.stringify(
    {
      status,
      title,
      desc,
      can,
      h1Count: h1s.length,
      h1s,
      faqPage,
      hasRupee,
      badClaims: bad,
      waSample: wa,
      telSample: tel,
      hasOnlineBizLink: body.includes("/gst-registration-online-business"),
      hasReturnsLink: body.includes("/gst-compliance"),
    },
    null,
    2
  )
);

for (const p of ["/", "/gst-registration-online-business", "/gst-compliance"]) {
  const r = await get(p);
  console.log(p, r.status, "len", r.body.length);
}
