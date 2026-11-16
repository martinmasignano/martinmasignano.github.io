---
layout: page
title: Journal
permalink: /journal/
---

A running collection of notes, essays, and things I don’t want to forget.

<div class="post-list journal-list">
  {% for post in site.posts %}
    <article class="post-row">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      <div>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
      </div>
    </article>
  {% else %}
    <p class="muted">No entries yet. The first one can be as small as a few lines.</p>
  {% endfor %}
</div>
