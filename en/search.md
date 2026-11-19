---
layout: default
title: Search
permalink: /en/search/
lang: en
---

<section class="site-search-page" aria-labelledby="site-search-heading">
  <h1 id="site-search-heading">Search</h1>
  <p>Explore projects, pages, and journal entries.</p>
  <label for="site-search-input">What are you looking for?</label>
  <input id="site-search-input" class="site-search-input" type="search" placeholder="Type a word or phrase…" autocomplete="off" data-site-search data-lang="en" data-index-url="{{ '/search-index.json' | relative_url }}" aria-controls="search-results" aria-describedby="search-status">
  <p id="search-status" class="search-status" role="status" aria-live="polite">Start typing to search.</p>
  <div id="search-results" class="search-results" aria-label="Search results"></div>
</section>
<script src="{{ '/assets/js/site-search.js' | relative_url }}" defer></script>
