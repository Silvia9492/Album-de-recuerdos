import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    clicked: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Guardar recuerdo',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancelar',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    label: 'Saber más',
    variant: 'outline',
    size: 'medium',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Editar recuerdo',
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Añadir recuerdo',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
