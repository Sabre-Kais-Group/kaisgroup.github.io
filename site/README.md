# Sabre Kais Group website (Jekyll)

This folder is the editable lab website, based on
[ericdaat/research-lab-website](https://github.com/ericdaat/research-lab-website).
The old HTML site remains in the repository root as an archive.

**Live site (after GitHub Pages is set to Actions):**  
https://sabre-kais-group.github.io/kaisgroup.github.io/

You do **not** need to know HTML or CSS for routine updates. Edit Markdown or YAML
files on GitHub, then commit to `main`.

---

## How to edit (on GitHub.com)

1. Open the file you need (paths below).
2. Click the pencil icon (**Edit**).
3. Make your changes.
4. Click **Commit changes** on the `main` branch.
5. Wait 1–2 minutes for the site to rebuild.

### Add or update a team member

Files live in [`_pages/team/_posts/`](_pages/team/_posts/).

1. Copy an existing `.md` file (e.g. a postdoc or student).
2. Rename it: `YYYY-MM-DD-firstname-lastname.md` (date controls sort order).
3. Update the front matter:

```yaml
---
layout: member
category: staff          # use "staff" for PI/postdocs, "student" for grad students
title: Jane Doe
image: jane-doe.jpg      # file must exist in images/team/
role: Ph.D. Student, Chemistry
permalink: 'team/jane-doe'
---

Short bio here.

**Email:** [jdoe@purdue.edu](mailto:jdoe@purdue.edu)
```

4. Upload the photo to [`images/team/`](images/team/) (same filename as `image:`).

### Add news

Edit [`_data/news.yml`](_data/news.yml). Add a block at the **top**:

```yaml
- date: 07/16/26
  title: "Short headline"
  tags:
    - award
  content: >
    One or two sentences describing the news item.
```

### Add or refresh publications

`_data/publications.json` is generated from Sabre Kais's
[Google Scholar profile](https://scholar.google.com/citations?hl=en&user=wtnZaMMAAAAJ&view_op=list_works&sortby=pubdate)
(all entries from 2017 onward, deduplicated so a published version replaces its
arXiv preprint listing when both exist). Each entry:

```json
{
  "id": "unique-id",
  "title": "Paper title",
  "authors": "Initials Lastname, Initials Lastname, ...",
  "container": "Journal Name 12 (3), 45-67",
  "year": 2024,
  "citations": 0,
  "link": "https://scholar.google.com/citations?view_op=view_citation&..."
}
```

To refresh: re-fetch the Scholar profile pages (`cstart=0,100,200,...` with
`pagesize=100`), parse the `gsc_a_tr` rows, filter/dedupe as above, and
regenerate the file. To add a single one-off entry by hand, just append an
object with the same fields.

### Edit research or home text

- Home: [`_pages/home.md`](_pages/home.md)
- Research: [`_pages/research.md`](_pages/research.md)
- Contact: [`_pages/contact.md`](_pages/contact.md)

### Site settings (title, email, URL)

[`_config.yml`](_config.yml) — usually only maintainers change this.

---

## Local preview (optional)

```bash
cd site
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/kaisgroup.github.io/

---

## Deploy

GitHub Actions workflow [`.github/workflows/pages.yml`](../.github/workflows/pages.yml)
builds this folder and publishes to GitHub Pages.

In the repository settings: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
