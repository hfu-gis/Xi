<template>
    <script src="https://www.amcharts.com/lib/3/ammap.js" type="text/javascript"></script>
    <script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js" type="text/javascript"></script>
    <script src="https://www.amcharts.com/lib/3/themes/dark.js" type="text/javascript"></script>
    <div id="mapdiv" style="width: 750px; height: 450px;"></div>
    <div style="width: 1000px; text-align: center; background-color: #535364;  color: #B4B4B7;"><a href="https://www.amcharts.com/visited_countries/" style="color: #B4B4B7;" href="https://www.amcharts.com/" style="color: #B4B4B7;"></a></div>
    <script type="text/javascript">

        var map = AmCharts.makeChart("mapdiv",{
            type: "map",
            theme: "light",
            projection: "mercator",
            panEventsEnabled : true,
            backgroundColor : "darkred",
            backgroundAlpha : 1,
            zoomControl: {
                zoomControlEnabled : true
            },
            dataProvider : {
                map : "worldHigh",
                getAreasFromMap : true,
                areas :
                    []
            },
            areasSettings : {
                autoZoom : true,
                color : "#B4B4B7",
                colorSolid : "#84ADE9",
                selectedColor : "#84ADE9",
                outlineColor : "#666666",
                rollOverColor : "dodgerblue",
                rollOverOutlineColor : "#000000"
            }
        });
    </script>

</template>

<script>
    export default {
        name: "Worldmap"
    }
</script>

<style scoped>

</style>