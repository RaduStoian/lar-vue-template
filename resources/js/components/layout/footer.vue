<template>
    <footer>
        <p>Footer</p>
    </footer>

</template>

<script>
    export default {
        name: 'app-footer',

        data: function() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../sass/variables.scss';
footer {
    background-color: $my-grey;
    padding: 3rem;
    color:white;
    margin-top:5rem;
}
</style>

