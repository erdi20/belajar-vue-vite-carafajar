<template>
    <p>user detail {{ $route.params.params }}</p>
    <br>
    <router-link :to="'/user/' + $route.params.params + '/posts'">{{ $route.params.params }} post</router-link>
    <br>
    <router-link :to="'/user/' + $route.params.params + '/profile'">{{ $route.params.params }} profile</router-link>
</template>