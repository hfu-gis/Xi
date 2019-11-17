<template>
    <div id="login">

        <section>

            <article class="login-box">
                <header class="login-box-header">
                    <a href="index.php"><h1>NEWS OF THE WORLD</h1></a>
                </header>

                <section id="login-log-area">
                    <h1>Forgot account?</h1>

                    <section class="login-error" style="background: limegreen;">
                        <h3>Vielen Dank!</h3>
                        <p>
                            Du erhälst in kürze eine eMail mit einem neuen Passwort.
                            <br><a href="login.php">Zurück zum Login!</a>
                        </p>
                    </section>

                    <p>
                        <b>Forgot your account?</b>
                        <br> Please enter your email to search for your account.
                    </p>
                    <br>
                    <input type="text" placeholder="eMail"/>

                    <input type="submit" value="Let's get your account back!"/>

                </section>

            </article>

        </section>
    </div>
</template>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'forgotacc',

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
