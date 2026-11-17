---
layout: page
title: Inicio
permalink: /es/
lang: es
---

<section class="home-intro">
  <p class="eyebrow">Portafolio · Diario · Notas</p>
  <h1>Un pequeño rincón en internet para el trabajo y las palabras.</h1>
  <p class="intro-copy">Soy Martin. Aquí reúno algunos proyectos, cosas que voy aprendiendo y textos que quiero conservar. Gracias por pasar.</p>
  <div class="intro-links">
    <a class="text-link" href="{{ '/es/portfolio/' | relative_url }}">Ver el portafolio <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/es/journal/' | relative_url }}">Leer el diario <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="work-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Proyectos seleccionados</p>
      <h2 id="work-heading">Algunas cosas que hice</h2>
    </div>
    <a class="text-link" href="{{ '/es/portfolio/' | relative_url }}">Ver proyectos <span aria-hidden="true">→</span></a>
  </div>
  <p class="muted">Un portafolio crece de a un proyecto por vez. <a href="{{ '/es/portfolio/' | relative_url }}">Descubrí cómo sumar el tuyo.</a></p>
</section>

<section class="home-section" aria-labelledby="recent-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Lo último que escribí</p>
      <h2 id="recent-heading">Del diario</h2>
    </div>
    <a class="text-link" href="{{ '/es/journal/' | relative_url }}">Todos los textos <span aria-hidden="true">→</span></a>
  </div>
  <div class="post-list">
    {% assign spanish_posts = site.posts | where: "lang", "es" %}
    {% for post in spanish_posts limit:3 %}
      <article class="post-row">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        <div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
          {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 150 }}</p>{% endif %}
        </div>
      </article>
    {% else %}
      <p class="muted">La próxima entrada está esperando ser escrita.</p>
    {% endfor %}
  </div>
</section>
