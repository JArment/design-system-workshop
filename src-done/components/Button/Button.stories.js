import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './Button.vue'

storiesOf('Button', module)
  .add('Filter', () => ({
    components: { Button },
    template: `<Button @click="action" type="filter">completed</Button>`,
    methods: { action: action('clicked') }
  }))
  .add('Filter Active', () => ({
    components: { Button },
    template: `<Button class='selected' @click="action" type="filter">completed</Button>`,
    methods: { action: action('clicked') }
  }))
  .add('Clear', () => ({
    components: { Button },
    template: '<Button  @click="action" type="clear">clear</Button>',
    methods: { action: action('clicked') }
  }))
  .add('Destroy', () => ({
    components: { Button },
    template: '<Button  @click="action" type="destroy">×</Button>',
    methods: { action: action('clicked') }
  }))
