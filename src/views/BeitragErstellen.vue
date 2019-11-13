<BeitragErstellen>
    <div class="BeitragErstellen">


        <strong><h2>Create an article</h2></strong>
        <form>

            <label for="title" >Title:
                <input id="title" name="title">
            </label>
            <br><br>

            <label for="description" >Description:
                <input id="description" name="description">
            </label>

            <br><br>
            Write article:
            <br>
            <textarea name="message" rows="20" cols="100">
    </textarea>
            <br>
            <input type="submit" value="Submit">

        </form>
    </div>
</BeitragErstellen>

<script>
    export default {
        // gebt jeder Page einen eigenen Namen
        name: 'BeitragErstellen',

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
        list-style-type: lower-roman;
        display: block;
        color: dodgerblue;
        text-align: center;
        padding: 16px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: dodgerblue;
    }
</style>
