import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './component.vue';

describe('Component', () => {
  it('renders meta title from the store', () => {
    setActivePinia(createPinia());
    const wrapper = mount(Component);
    expect(wrapper.text()).toContain('Example Title');
  });
});
