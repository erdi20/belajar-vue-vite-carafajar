<script>
export default {
    props: {
        name: String
    },
    emits: ['response'],
    methods: {
        data() {
            this.$emit('response', this.name)
        }
    }
}
</script>
<template>
    <slot>slot default</slot><br>
    halo student {{ name }} <button @click="data">klik</button><br>
</template>