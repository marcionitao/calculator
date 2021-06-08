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
              {{ actual }}
            </div>
            <div class="text-h3 text-right">
              Total
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
                 <q-btn class="full-width text-h6" color="indigo">Reset</q-btn>
              </dir>
              <dir class="col-6">
                 <q-btn class="full-width text-h6" color="orange"> = </q-btn>
              </dir>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const buttons = [7,8,9,"%",4,5,6,"+",1,2,3,"-",".",0,"/","*"];
    // 'isNaN' verify if is a String
    const noNumber = myValue => isNaN(myValue);

    // reative
    const actual = ref('');

    // detected Number or operator button
    const btnAction = myValue => {
      // if is a Number
      if (!noNumber(myValue)) {
        // concatenating values
        actual.value = `${actual.value}${myValue}`
      }
    }

    return { buttons, noNumber, btnAction, actual}
  }
}
</script>

<style lang="scss" scoped>
  .text-h5 {
    height: 23px;
  }
  .text-h5 {
    height: 50px;
  }
</style>
