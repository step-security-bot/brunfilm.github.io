---
layout: doc
---
<script setup>
import { data as movies} from './movies.data.js'
</script>

# Our Cinematic Treasures

Here's a list of our groundbreaking (literally, we film in caves) movies:

<div v-for="(movie, index) in movies" :key="index">
    <h2>{{ movie.title }} ({{ movie.year }})</h2>
    <p>{{ movie.description }}</p>
</div>

<style module>
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
