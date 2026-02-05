import { Meta, StoryObj, moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from './button.component'
import { CommonModule } from '@angular/common'

const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
        }),
    ],
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: 'boolean',
        },
        clicked: {action: 'clicked'},
    },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

//HISTORIA DEL BOTÓN PRIMARIO
export const Primary: Story = {
    args: {
        label: 'Guardar recuerdo',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    }
}

//HISTORIA DEL BOTÓN SECUNDARIO
export const Secondary: Story = {
    args: {
        label: 'Cancelar',
        variant: 'secondary',
        size: 'medium',
        disabled: false,
    }
}

//HISTORIA DEL BOTÓN OUTLINE
export const Outline: Story = {
    args: {
        label: 'Saber más',
        variant: 'outline',
        size: 'medium',
        disabled: false,
    }
}

//HISTORIA DEL BOTÓN PEQUEÑO
export const Small: Story = {
    args: {
        label: 'Editar recuerdo',
        variant: 'primary',
        size: 'small',
        disabled: false,
    }
}

//HISTORIA DEL BOTÓN GRANDE
export const Large: Story = {
    args: {
        label: 'Añadir recuerdo',
        variant: 'primary',
        size: 'large',
        disabled: false,
    }
}

//HISTORIA DEL BOTÓN DESHABILITADO
export const Disabled: Story = {
    args: {
        label: 'Deshabilitado',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    }
}