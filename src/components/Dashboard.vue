<template>
    <v-container>
        <v-row class="pt-16">
            <v-col cols="12" xs="12" md="6" class="text--center">
                    <v-img
                       width="100%"
                       height="100%"
                       :src="require('../assets/img/future_job.png')">
                    </v-img>
            </v-col>
            <!-- <v&#45;col cols="12" xs="12" md="6" class="mx&#45;auto mt&#45;16"> -->
            <v-col>
                <v-card class="mx-auto mt-16" max-width="900" elevation="0">
                    <v-container text-center>
                    <h1 class="mx-auto">Find Your <strong>Dream Job</strong></h1>
                    <h1><strong>With Us</strong></h1>
                    <h1>And Bright Your Future</h1>
                    <v-btn class="mt-5" rounded  width="26%" color="primary" to="/jobs">Find Job</v-btn>
                    <v-btn rounded class="mt-5 ml-5" width="26%" color="primary" to="/register">Register</v-btn>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
    name: 'Dashboard',
}
