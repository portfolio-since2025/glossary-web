# IT用語・略語辞書（Web版）

基本情報技術者試験の学習と、IT初学者の理解を目的として作成した  
**シンプルなIT用語・略語検索Webアプリ**です。

ネットワーク・データベース・プログラミングを中心に、  
**600語以上のIT用語**を収録しています（今後1000語まで拡張予定）。

---
z
## 特徴

- 🔍 **インクリメンタル検索**（入力と同時に絞り込み）
- 🆎 **大文字・小文字を区別しない検索**
- 📚 **意味＋補足説明を同時表示**
- 📴 **完全ローカル動作**（外部API・サーバー不要）
- 🔒 **スリープやAPI制限の影響なし**

---

## 使い方

1. `index.html` をブラウザで開く  
2. 検索欄に用語や略語（例：TCP, HTTP, JVM）を入力  
3. 一致する用語が一覧表示されます  

※ VS Code の Live Server 拡張機能を使うと、より快適に確認できます。

---

## データ管理について

- 用語データは **Googleスプレッドシート**で管理
- スプレッドシートを **TSV形式でエクスポート**
- Pythonスクリプトで **JSONへ自動変換**

```text
Google Spreadsheet
   ↓ (tsv)
terms.tsv
   ↓ (Python)
terms.json

---

# IT Glossary Web App

This is a **simple IT glossary web application** created for learning and reviewing
technical terms used in IT, especially for exam preparation and beginners.

The app currently contains **600+ IT terms**, mainly covering networking,
databases, and programming concepts.  
(The dataset will be expanded to 1000 terms.)

---

## Features

- 🔍 **Incremental search** (real-time filtering while typing)
- 🆎 **Case-insensitive search**
- 📚 Displays both **definitions and additional notes**
- 📴 **Fully local** (no external APIs, no server required)
- 🔒 No API limits, no sleep issues

---

## How to Use

1. Open `index.html` in your browser  
2. Type a keyword (e.g. TCP, HTTP, JVM) into the search box  
3. Matching terms will be displayed instantly  

Using VS Code with the Live Server extension is recommended for development.

---

## Data Management

- All terms are managed in **Google Spreadsheet**
- Exported as **TSV**
- Automatically converted to JSON using a Python script

```text
Google Spreadsheet
   ↓ (tsv)
terms.tsv
   ↓ (Python)
terms.json


