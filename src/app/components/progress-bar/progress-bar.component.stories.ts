import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
    title: 'Components/ProgressBar',
    component: ProgressBarComponent,
    tags: ['autodocs'],
    argTypes: {
        currentStep: {
            control: {type: 'number', min: 0, max: 3 

            }
        },
        totalSteps: {
            control: {type: 'number', min: 1, max: 10}
        }
    }
};

export default meta;

type Story = StoryObj<ProgressBarComponent>;

//Progreso en el primer paso del formulario
export const ProgressStep1: Story = {
    args: {
        currentStep: 0,
        totalSteps: 4
    },
    parameters: {
        docs: {
            description: {
                story: 'Progreso de la barra en el step 1 del formulario'
            }
        }
    }
};

//Progreso en el segundo paso del formulario
export const ProgressStep2: Story = {
    args: {
        currentStep: 1,
        totalSteps: 4
    },
    parameters: {
        docs: {
            description: {
                story: 'Progreso de la barra en el step 2 del formulario'
            }
        }
    }
};

//Progreso en el tercer paso del formulario
export const ProgressStep3: Story = {
    args: {
        currentStep: 2,
        totalSteps: 4
    },
    parameters: {
        docs: {
            description: {
                story: 'Progreso de la barra en el step 3 del formulario'
            }
        }
    }
};

//Progreso de la barra cuando el formulario está completo
export const ProgressFormCompleted: Story = {
    args: {
        currentStep: 3,
        totalSteps: 4
    },
    parameters: {
        docs: {
            description: {
                story: 'Progreso de la barra cuando el formulario ha sido completado'
            }
        }
    }
};