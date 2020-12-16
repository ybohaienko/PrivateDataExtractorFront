<template>
    <div id="app">
        <Header/>
        <DataSources/>
        <IndividualSearch/>
        <Attributes/>
    </div>
</template>
<script>
    import Header from './components/Header.vue'
    import DataSources from './components/DataSources.vue'
    import Attributes from './components/Attributes.vue'
    import IndividualSearch from './components/IndividualSearch.vue'

    export default {
        name: 'app',
        components: {
            Header,
            DataSources,
            IndividualSearch,
            Attributes
        }
    }
</script>
<style>
    #app {
        font-family: 'Days', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    h3 {
        float: left;
        margin-bottom: 1%;
        margin-top: 5%;
    }

    input {
        margin: 1%;
    }

    td.vert-aligned {
        vertical-align: middle;
    }
</style>
