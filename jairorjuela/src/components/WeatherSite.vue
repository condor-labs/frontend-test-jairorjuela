<template>
  <div>
    <WidgetOne />
    <WidgetTwo />
  </div>
</template>

<script>
  import WidgetOne from '@/components/WidgetOne.vue'
  import WidgetTwo from '@/components/WidgetTwo.vue'

  export default {
    name: 'WeatherSite',

    components: {
      WidgetOne,
      WidgetTwo
    }
  }
</script>
