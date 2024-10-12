# Our Cinematic Treasures

Here's a list of our groundbreaking (literally, we film in caves) movies:

<script setup>
import { ref, onMounted } from 'vue'
import { data as movies } from './movies.data.js'
// const movies = ref([])
</script>

<template>
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span>
    </li>
  </ul>
</template>

<div v-for="movie in movies" :key="movie.title">
  <h2>{{ movie.title }} ({{ movie.year }})</h2>
  <p>{{ movie.description }}</p>
</div>

<style>
.movie-list {
  display: grid;
  gap: 2rem;
}

.movie-item {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.movie-item h2 {
  margin-top: 0;
  color: #333;
}

.movie-item p {
  color: #666;
}
</style>
