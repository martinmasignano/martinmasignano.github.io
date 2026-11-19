---
layout: default
title: Buscar
permalink: /search/
lang: es
---

<section class="site-search-page" aria-labelledby="site-search-heading">
  <h1 id="site-search-heading">Buscar</h1>
  <p>Explorá proyectos, páginas y entradas del diario.</p>
  <label for="site-search-input">¿Qué estás buscando?</label>
  <input id="site-search-input" class="site-search-input" type="search" placeholder="Escribí una palabra o una frase…" autocomplete="off" data-site-search data-lang="es" data-index-url="{{ '/search-index.json' | relative_url }}" aria-controls="search-results" aria-describedby="search-status">
  <p id="search-status" class="search-status" role="status" aria-live="polite">Escribí algo para empezar.</p>
  <div id="search-results" class="search-results" aria-label="Resultados de búsqueda"></div>
</section>
<script src="{{ '/assets/js/site-search.js' | relative_url }}" defer></script>
