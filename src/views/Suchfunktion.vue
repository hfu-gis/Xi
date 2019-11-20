<template>
    <div class="Suchfunktion">

        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#Continent">Continent</a></li>
            <li><a href="#Topic">Topic</a></li>
            <li><a href="#Hashtags">Hashtags</a></li>
            <li><a href="#Subscriptions">Subscriptions</a></li>

            <li style="float:right"><a href="#Search">Search</a><input type="text" name="fname"><input type="submit" value="Submit"></li>
         </ul>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'Suchfunktion',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // Variablen-Speicher
        data() {
            return {}
        },

        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: [],

        // Initialisierung
        created() {}
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: dodgerblue;
    }

    li {
        float: left;
        border-right:1px solid #bbb;
    }

    li:last-child {
        border-right: none;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: darkred;
    }

    .active {
        background-color: darkred;
    }
</style>
