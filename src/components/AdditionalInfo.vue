<template>
  <v-card class="mb-3" outlined>
    <v-card-title>
      <div>Additional Info</div>
    </v-card-title>
    <v-card-text>
      <div v-for="info in dataInfo" :key="info.ID">
        <v-container>
          <v-row>
            <v-col cols="7">
              Expected Sallary
            </v-col>
            <v-col cols="5">
              {{ info.curency + " " + info.expe_sal }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">Overseas</v-col>
            <v-col cols="5"> {{ info.overseas }} </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">Work Location 1</v-col>
            <v-col cols="5"> {{ info.work_loc1 }} </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">Work Location 2</v-col>
            <v-col cols="5"> {{ info.work_loc2 }} </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">Work Location 3</v-col>
            <v-col cols="5"> {{ info.work_loc3 }} </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">Other Information</v-col>
            <v-col cols="5"> {{ info.other_info }} </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "AdditionalInfo",
  props: ["addInfo"],
  computed: {
    dataInfo() {
      return this.addInfo;
    },
  },
};
</script>
