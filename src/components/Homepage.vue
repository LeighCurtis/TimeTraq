<script setup>
</script>
<script>
  export default {
    name: "Homepage",
    data: () => ({
      location_filter: ["one", "two", "three", "Manila"],
      location_filter_default: ["Manila"],
      region_filter: ["one", "two", "three", "Manila"],
      region_filter_default: ["APAC"],
      answertype_filter_default: ["Text"],
      answertype_filter: ["Rating", "Text"],
      event: [],
      questions: [],
      sample: null,
      dialog: false,
      removeDialog: false,
      editDialog: false,
      eventId: null,
      questionToDelete: null,

      // event questions
      EventQuestion:{
        eventId: null,
        eventQuestion: '',
      },
    }),
  };
</script>

<template>
  <div style="z-index:2;" class="main-content">
    <v-sheet class="d-flex flex-wrap">
      <v-sheet class="flex-1-0 ma-2 pa-2">
        <v-sheet class="flex-1-0 ma-2 pa-2">
          Date and Time Stamp
        </v-sheet>
        <v-sheet class="camera-frame flex-1-0 pa-2 bg-surface-variant">
          This is a box
        </v-sheet>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        I'm a single element in an inline flexbox container!
      </v-sheet>
    </v-sheet>
  </div>
  <div id="container">
    <div style="z-index:1;">
      <v-img style="margin-left:500px" src="../assets/pattern.png"/>
    </div>
    <div style="z-index:1;">
      <v-img style="margin-left:-500px" src="../assets/pattern-flip.png"/>
    </div>
    <div style="z-index:1;">
      <v-img style="width: 300px; margin-left:455px; margin-top:250px;" src="../assets/make-it-logo.png"/>
    </div>
  </div>
</template>

<style>
  body {
  background-color:rgb(100, 14, 14);
  }
  #container {
    width:100%;
    height:100%;
    background-color:#FFFFFF;
  }
  #container div{
    width:100%;
    height:100%;
    position: fixed;
  }
  .main-content {
    z-index: 2;
    position: fixed;
    width: 70%;
    margin-top: 20%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    background-color: #00060c
  }
  .camera-frame{
    width: 100%;
    height: 100%;
    background-color: rgb(65, 39, 6)
  }
</style>
  