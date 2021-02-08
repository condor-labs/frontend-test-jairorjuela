<template>
  <div>
    <WidgetOne />
    <WidgetTwo />
    <WidgetThree />
  </div>
</template>

<script>
  import WidgetOne from '@/components/WidgetOne.vue'
  import WidgetTwo from '@/components/WidgetTwo.vue'
  import WidgetThree from '@/components/WidgetThree.vue'

  export default {
    name: 'WeatherSite',

    components: {
      WidgetOne,
      WidgetTwo,
      WidgetThree
    }
  }
</script>
