---
layout: default
title: Trang viết
permalink: /posts/
---

<h1>Những trang đã viết</h1>

<div class="ink-divider">✦ ✦ ✦</div>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%d · %m · %Y" }}</span>
    </li>
  {% endfor %}
</ul>
