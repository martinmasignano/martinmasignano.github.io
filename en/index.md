---
layout: default
title: Home
permalink: /en/
lang: en
---

<section class="home-intro">
  <p class="eyebrow">Design · Stories · Learning</p>
  <h1>I design experiences. I work with stories. I support creative processes.</h1>
  <p class="intro-copy">I work at the intersection of design, audiovisual storytelling, and editing. I'm interested in ideas, the people who bring them to life, and the forms they take as they become something real.</p>
  <div class="intro-links">
    <a class="text-link" href="{{ '/en/portfolio/' | relative_url }}">Explore projects <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/en/journal/' | relative_url }}">Read the journal <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="work-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Projects and journeys</p>
      <h2 id="work-heading">A few things I've done</h2>
    </div>
    <a class="text-link" href="{{ '/en/portfolio/' | relative_url }}">View portfolio <span aria-hidden="true">→</span></a>
  </div>
  <div class="home-projects">
    <article class="home-project">
      <p class="project-kicker">Documentary editing</p>
      <h3>Carlinho</h3>
      <p>A film I edited about relationships, memory, and reunions. A search for rhythm, structure, and the right form for a story.</p>
    </article>
    <article class="home-project">
      <p class="project-kicker">Design and leadership</p>
      <h3>Banco Galicia</h3>
      <p>Service design, research, and product design. Years of working with teams, ideas, and questions we explored together.</p>
    </article>
    <article class="home-project">
      <p class="project-kicker">Reading and editing</p>
      <h3>Libros Vitales</h3>
      <p>A space to share readings, think about books, and start conversations around stories.</p>
    </article>
  </div>
</section>

<section class="home-section" aria-labelledby="recent-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Thinking out loud</p>
      <h2 id="recent-heading">From the journal</h2>
    </div>
    <a class="text-link" href="{{ '/en/journal/' | relative_url }}">All writing <span aria-hidden="true">→</span></a>
  </div>
  <div class="post-list">
    {% assign english_posts = site.posts | where: "lang", "en" %}
    {% for post in english_posts limit:3 %}
      <article class="post-row">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
        <div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
          {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 150 }}</p>{% endif %}
        </div>
      </article>
    {% else %}
      <p class="muted">The first notes are taking shape.</p>
    {% endfor %}
  </div>
</section>

<section class="home-section home-learning" aria-labelledby="learning-heading">
  <p class="eyebrow">Learning together</p>
  <h2 id="learning-heading">Questions can move us forward, too.</h2>
  <p>I believe learning is a shared experience: coming together, trying things out, exchanging perspectives, and discovering something we hadn't seen before.</p>
  <a class="text-link" href="{{ '/en/about/' | relative_url }}">A little more about me <span aria-hidden="true">→</span></a>
</section>
