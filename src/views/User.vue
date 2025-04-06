<script>
export default {
    data() {
        return {
            users: [
                {
                    params: 'meg',
                    name: 'Meg'
                },
                {
                    params: 'ben',
                    name: 'Ben'
                },
                {
                    params: 'greg',
                    name: 'Greg'
                },
            ]
        }
    }
}
</script>
<template>
    <h1>user view</h1>
    <ul>
        <li v-for="user in users">
            <router-link :to="'/user/' + user.params">
                {{ user.name }}
            </router-link>
        </li>
    </ul>
</template>