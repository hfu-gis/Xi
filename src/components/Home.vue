<template>
    <v-app id="login">
    <v-container class="fill-height">
        <v-row
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                Test
                <svg-map :map="Taiwan" />
            </v-col></v-row>
    </v-container>
    </v-app>
</template>

<script>
    //import { SvgMap } from "vue-svg-map";
    //import Taiwan from "../assets/world.svg";
    //import Taiwan from "@svg-maps/germany"
    export default {
  name: 'HelloWorld',

        components: {
      //      SvgMap
        },
        data() {
            return {
        //        Taiwan
            };
        }
    };

</script>

<!--
<style src="vue-svg-map/dist/index.css"></style>
-->

