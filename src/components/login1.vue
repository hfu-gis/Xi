<template>
    <div id="login">

    <article class="login-box">
        <header class="login-box-header">
            <a href="index.php"><h1>DIE NachrichtenApp 9000</h1></a>
        </header>

        <section id="login-log-area">
            <h1>Login</h1>
            <section class="login-error">
                <h3>ALLLAAARRRRRMMMM!!!!</h3>
                <p>
                    Du hast falsche Daten eingegeben, du Nudel.
                    <br>Versuchs gerne nochmals.
                </p>
            </section>
            <input type="text" placeholder="eMail"/>
            <input type="password" placeholder="Passwort"/>

            <a href="../../pw-vergessen.html" id="forget-pw">Passwort vergessen?</a>

            <input type="submit" value="Login"/>

        </section>

        <section id="login-new-acc-area">

            <button onclick="window.location.href='register.html'" style="background: #666"> Neues Konto anlegen</button>

        </section>

    </article>

    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'login',

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
    /* CSS für diese Seite hier einfügen */
</style>
