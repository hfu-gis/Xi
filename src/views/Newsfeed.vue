<template>

    <v-app>

        <br>
        <br>
        <br>
        <br>


    <div id="app">
        <v-app id="inspire">
            <v-card
                    max-width="344"
                    class="mx-auto"
            >
                <v-list-item>
                    <v-list-item-avatar color="red"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">Amazonas burning down</v-list-item-title>
                        <v-list-item-subtitle>by Phil Taylor</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-img
                 src="../../img/Amazonas.jpg" height="194" width="400"
                 >

                </v-img>

                <v-card-text>
                    The Amazonas is dying. What can we do to protect it?
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            text
                            color="deep-purple accent-4"
                    >
                        Read
                    </v-btn>
                    <v-btn
                            text
                            color="deep-purple accent-4"
                    >
                        Bookmark
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-app>
    </div>




        <div id="app">
            <v-app id="inspire">
                <v-card
                        max-width="344"
                        class="mx-auto"
                >
                    <v-list-item>
                        <v-list-item-avatar color="red"></v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">Amazonas burning down</v-list-item-title>
                            <v-list-item-subtitle>by Phil Taylor</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-img
                            src="../../img/Amazonas.jpg" height="194" width="400"
                    >

                    </v-img>

                    <v-card-text>
                        The Amazonas is dying. What can we do to protect it?
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                text
                                color="deep-purple accent-4"
                        >
                            Read
                        </v-btn>
                        <v-btn
                                text
                                color="deep-purple accent-4"
                        >
                            Bookmark
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-app>
        </div>

    </v-app>
</template>


<script>
    export default {
        name: "Newsfeed"
    }
</script>

<style scoped>
    body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}

    .vcard {
        opacity: 0.9;
        border: 0 !important;
        margin: 10px;
    }

    .vcard span {
        background-color: black;
        opacity: 0.9;
    }

    .vcard a {
        color: white;
        margin: 10px;
    }

    span.description {
        background-color: white;
    }

    .icon {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>