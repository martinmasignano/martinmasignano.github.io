---
layout: default
title: Inicio
permalink: /
lang: es
---

<section class="home-intro">
  <p class="eyebrow">Diseño · Historias · Aprendizaje</p>
  <h1>Diseño <mark class="intro-highlight">experiencias</mark>. Trabajo con <mark class="intro-highlight">historias</mark>. Acompaño <mark class="intro-highlight">procesos</mark> creativos.</h1>
  <p class="intro-copy">Trabajo en la intersección entre el diseño, el audiovisual y la edición. Me interesan las ideas, las personas que las impulsan y las formas que encuentran para convertirse en algo.</p>
  <div class="intro-links">
    <a class="text-link" href="{{ '/portfolio/' | relative_url }}">Explorar proyectos <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/journal/' | relative_url }}">Leer el diario <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="work-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Proyectos y recorridos</p>
      <h2 id="work-heading">Algunas cosas que hice</h2>
    </div>
    <a class="text-link" href="{{ '/portfolio/' | relative_url }}">Ver el portafolio <span aria-hidden="true">→</span></a>
  </div>
  <div class="home-projects">
    <article class="home-project">
      <p class="project-kicker">Montaje documental</p>
      <h3>Carlinho</h3>
      <p>Una película que monté, sobre vínculos, memoria y reencuentros. Una búsqueda de ritmo, estructura y forma para contar una historia.</p>
    </article>
    <article class="home-project">
      <p class="project-kicker">Diseño y liderazgo</p>
      <h3>Banco Galicia</h3>
      <p>Diseño de servicios, investigación y producto. Años de trabajo con equipos, ideas y preguntas compartidas.</p>
    </article>
    <article class="home-project">
      <p class="project-kicker">Lecturas y edición</p>
      <h3>Libros Vitales</h3>
      <p>Un espacio para compartir lecturas, pensar los libros y abrir conversaciones alrededor de las historias.</p>
    </article>
  </div>
</section>

<section class="home-section" aria-labelledby="recent-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Ideas en voz alta</p>
      <h2 id="recent-heading">Del diario</h2>
    </div>
    <a class="text-link" href="{{ '/journal/' | relative_url }}">Todos los textos <span aria-hidden="true">→</span></a>
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
      <p class="muted">Las primeras notas están tomando forma.</p>
    {% endfor %}
  </div>
</section>

<section class="home-section home-learning" aria-labelledby="learning-heading">
  <p class="eyebrow">Aprender con otros</p>
  <h2 id="learning-heading">Las preguntas también nos hacen avanzar.</h2>
  <p>Creo en el aprendizaje como una experiencia compartida: encontrarnos, probar cosas, intercambiar miradas y descubrir juntos algo que antes no veíamos.</p>
  <a class="text-link" href="{{ '/about/' | relative_url }}">Un poco más sobre mí <span aria-hidden="true">→</span></a>
</section>
