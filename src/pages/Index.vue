<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-card>

          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Calculator</div>
          </q-card-section>

          <q-card-section>
            <div class="text-h5 text-grey-5 text-right">
              {{ accumulator + actual }}
            </div>
            <div class="text-h3 text-right">
              {{ result }}
            </div>
          </q-card-section>
          <!--Buttons-->
          <q-card-section class="bg-grey-4">
            <div class="row q-col-gutter-sm">
              <!--Nas we don't have any index-->
              <div class="col-3" v-for="(btn, index) in buttons" :key="index">

                <q-btn
                  class="full-width text-h6"
                  :color="noNumber(btn) ? 'indigo' : 'grey-2'"
                  :text-color="noNumber(btn) ? 'white' : 'grey-8'"
                  @click="btnAction(btn)"
                  >
                  {{ btn }}
                </q-btn>
              </div>

              <dir class="col-6">
                 <q-btn class="full-width text-h6" color="indigo" @click="btnReset()">Reset</q-btn>
              </dir>
              <dir class="col-6">
                 <q-btn class="full-width text-h6" color="orange" @click="btnResult()"> = </q-btn>
              </dir>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  .text-h5 {
    height: 23px;
  }
  .text-h5 {
    height: 50px;
  }
</style>
