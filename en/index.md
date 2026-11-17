---
layout: page
title: Home
permalink: /en/
lang: en
---

<section class="home-intro">
  <p class="eyebrow">Portfolio · Journal · Notes</p>
  <h1>A small corner of the internet for work and words.</h1>
  <p class="intro-copy">I’m Martin. This is where I collect selected work, things I’m learning, and writing I want to keep. Thanks for stopping by.</p>
  <div class="intro-links">
    <a class="text-link" href="{{ '/en/portfolio/' | relative_url }}">Explore the portfolio <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/en/journal/' | relative_url }}">Read the journal <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="work-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="work-heading">A few things I’ve made</h2>
    </div>
    <a class="text-link" href="{{ '/en/portfolio/' | relative_url }}">All work <span aria-hidden="true">→</span></a>
  </div>
  <p class="muted">A portfolio takes shape one project at a time. <a href="{{ '/en/portfolio/' | relative_url }}">See how to add yours.</a></p>
</section>

<section class="home-section" aria-labelledby="recent-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Recently written</p>
      <h2 id="recent-heading">From the journal</h2>
    </div>
    <a class="text-link" href="{{ '/en/journal/' | relative_url }}">All writing <span aria-hidden="true">→</span></a>
  </div>
  <div class="post-list">
    {% assign english_posts = site.posts | where_exp: "post", "post.lang != 'es'" %}
    {% for post in english_posts limit:3 %}
      <article class="post-row">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
        <div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
          {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 150 }}</p>{% endif %}
        </div>
      </article>
    {% else %}
      <p class="muted">The next entry is waiting to be written.</p>
    {% endfor %}
  </div>
</section>
