"use strict";

const q = document.getElementById("q");
const status = document.getElementById("status");
const list = document.getElementById("list");

let terms = [];

function norm(s) {
    return (s ?? "").toString().trim().toLowerCase();
}

function render(items) {
    list.innerHTML = "";
    for (const t of items) {
        const li = document.createElement("li");
        li.textContent = `${t.key} : ${t.meaning} // ${t.note}`;
        list.appendChild(li);
    }
}

function apply() {
    const keyword = norm(q.value);
    const filtered = keyword
        ? terms.filter(t =>
            norm(t.key).includes(keyword) ||
            norm(t.meaning).includes(keyword) ||
            norm(t.note).includes(keyword)
        )
        : terms;

    render(filtered);
    status.textContent = `${filtered.length}件表示`;
}

async function main() {
    const res = await fetch("./terms.json", { cache: "no-store" });
    terms = await res.json();
    status.textContent = `読み込み完了: ${terms.length}語`;
    render(terms);

    // 🔽 URL ?q= から検索語を復元（termsが入ってから！）
    const params = new URLSearchParams(location.search);
    const qFromUrl = params.get("q");
    if (qFromUrl) {
        q.value = qFromUrl;
        apply();
    }

    q.addEventListener("input", () => {
        apply();

        // 🔽 検索語をURLに反映
        const params = new URLSearchParams();
        if (q.value) params.set("q", q.value);
        history.replaceState(null, "", "?" + params.toString());
    });
}


main().catch(e => {
    console.error(e);
    status.textContent = "terms.json の読み込みに失敗しました";
});

