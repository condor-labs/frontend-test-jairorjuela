<template>
  <div>
    <WidgetOne />
    <WidgetTwo />
    <WidgetThree />
    <WidgetFour />
  </div>
</template>

<script>
  import WidgetOne from '@/components/WidgetOne.vue'
  import WidgetTwo from '@/components/WidgetTwo.vue'
  import WidgetThree from '@/components/WidgetThree.vue'
  import WidgetFour from '@/components/WidgetFour.vue'

  export default {
    name: 'WeatherSite',

    components: {
      WidgetOne,
      WidgetTwo,
      WidgetThree,
      WidgetFour
    }
  }
</script>
