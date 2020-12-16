<template>
    <div class="container">
        <h3>Target individual's attributes</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Value</th>
                <th scope="col">Private Data Type</th>
                <th scope="col">DocumentName</th>
                <th scope="col">DocumentPath</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="attribute in attributes" v-bind:key="attribute.id">
                <th scope="row">{{attribute.id}}</th>
                <td>{{attribute.value}}</td>
                <td>{{attribute.pdType}}</td>
                <td>{{attribute.document.documentName}}</td>
                <td>{{attribute.document.documentPath}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'Attributes',
        data() {
            return {
                attributes: null,
            };
        },
        mounted() {
            this.$root.$on('indAttributes', data => {
                this.attributes = data
            });
        }
    }
</script>
<style>
</style>
