import type { Meta, StoryObj } from '@storybook/angular'
import { InitFormComponent } from './init-form.component'

const meta: Meta<InitFormComponent> = {
    title: 'Components/InitForm',
    component: InitFormComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        formCompleted: {
            action: 'form completed',
            description: 'Evento emitido cuando el formulario es completado correctamente por el usuario'
        }
    }
};

export default meta;

type Story = StoryObj<InitFormComponent>;

//Primer paso del formulario
export const FirstStep: Story = {
    args: {
        currentStep: 0
    },
    parameters: {
        docs: {
            description: {
                story: 'Estado inicial del formulario. Step 1 del registro (solicitud de nombre al usuario)'
            }
        }
    }
};

//Segundo paso del formulario
export const SecondStep: Story = {
    args: {
        currentStep: 1
    },
    parameters: {
        docs: {
            description: {
                story: 'Step 2 del registro (solicitud de email al usuario)'
            }
        }
    }
};

//Tercer paso del formulario
export const ThirdStep: Story = {
    args: {
        currentStep: 2
    },
    parameters: {
        docs: {
            description: {
                story: 'Step 3 del registro (solicitud de contraseña al usuario)'
            }
        }
    }
};

//Cuarto paso del formulario
export const FourthStep: Story = {
    args: {
        currentStep: 3
    },
    parameters: {
        docs: {
            description: {
                story: 'Step 4 del registro (solicitud de confirmación de contraseña al usuario)'
            }
        }
    }
};