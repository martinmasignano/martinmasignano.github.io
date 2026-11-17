---
layout: page
title: Diario
permalink: /es/journal/
lang: es
---

Una colección de notas, ensayos y cosas que no quiero olvidar.

<div class="post-list journal-list">
  {% assign spanish_posts = site.posts | where: "lang", "es" %}
  {% for post in spanish_posts %}
    <article class="post-row">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
      <div>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
      </div>
    </article>
  {% else %}
    <p class="muted">Todavía no hay entradas. La primera puede tener solo unas pocas líneas.</p>
  {% endfor %}
</div>
