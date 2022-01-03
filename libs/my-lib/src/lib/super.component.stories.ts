import { Meta, Story } from '@storybook/angular';
import { SuperComponent } from './super.component';

export default {
    title: 'Super',
    component: SuperComponent
} as Meta;

export const Super: Story<SuperComponent> = () => ({
    props: {
    }
});