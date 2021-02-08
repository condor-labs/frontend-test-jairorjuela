import { shallowMount } from '@vue/test-utils'
import WidgetOne from '@/components/WidgetOne.vue'

describe('WidgetOne.vue is a Vue instance', () => {
  it('Is a Vue instacen', () => {
    const wrapper = shallowMount(WidgetOne, { })

    expect(wrapper.vm).toBeTruthy()
  })

  it('blah', () => {
    const wrapper = shallowMount(WidgetOne, { })

    expect(wrapper.html()).toMatch('Condor')
  })
})
