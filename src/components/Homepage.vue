<script setup>
</script>

<template>
  <div style="z-index:2;" class="main-content">
    <v-sheet class="d-flex">
      <!-- Left -->
      <v-sheet class="flex-1-0 ma-2 pa-2">
        <v-sheet class="flex-1-0 ma-2 pa-2">
          Date and Time Stamp
        </v-sheet>
        <v-sheet style="background-color: aquamarine;" class="camera-frame flex-1-0 pa-2">
          This is a box
        </v-sheet>
      </v-sheet>
      <!-- Right -->
      <v-sheet class="ma-2 pa-2">
        <v-sheet class="mx-auto" width="300">
          <h1 align="center" class="mb-5">Time TRAQ</h1>
        </v-sheet>
        <v-sheet class="mx-auto" width="300">
          <v-form fast-fail @submit.prevent>
            <v-text-field density="compact"
              v-model="employee_id"
              :rules="employee_id"
              label="Employee ID"
            ></v-text-field>

            <v-text-field density="compact"
              v-model="employee_name"
              :rules="employee_name"
              label="Employee Name"
            ></v-text-field>

            <v-text-field density="compact"
              v-model="email"
              :rules="email"
              label="Email"
            ></v-text-field>

            <v-btn class="mt-2" color="grey-darken-4"
              type="submit" density="comfortable" block
            >
              Submit
            </v-btn>
          </v-form>
        </v-sheet>
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
  background-color:rgb(241, 203, 203);
  }
  #container {
    width:100%;
    height:100%;
    /* background-color:#9d95b0; */
  }
  #container div{
    width:100%;
    height:100%;
    position: fixed;
  }
  .main-content {
    z-index: 2;
    position: fixed;
    width: 55%;
    /* height: 500px; */
    margin-top: 20%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
  }
  .camera-frame{
    width: 100%;
    height: 80%;
    background-color: rgb(190, 144, 83)
  }
</style>
  