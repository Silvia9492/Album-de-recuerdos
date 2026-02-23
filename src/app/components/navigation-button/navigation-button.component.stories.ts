import type { Meta, StoryObj } from '@storybook/angular'
import { NavigationButtonComponent } from './navigation-button.component'

const meta: Meta<NavigationButtonComponent> = {
    title: 'Components/NavigationButton',
    component: NavigationButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        currentStep: {
            control: { type: 'number', min: 0, max: 10 },
            description: 'Step actual del formulario'
        },
        totalSteps: {
            control: { type: 'number', min: 1, max: 10},
            description: 'Número total de steps del formulario'
        },
        canAdvance: {
            control: 'boolean',
            description: 'Indica si el usuario puede avanzar al siguiente paso o no'
        },
        showPrevious: {
            control: 'boolean',
            description: 'Muestra u oculta el botón de retroceso'
        },
        previous: {
            action: 'previous clicked',
            description: 'Evento que se emite cuando se hace click en el botón "Anterior"'
        },
        next: {
            action: 'next clicked',
            description: 'Evento que se emite cuando se hace click en el botón "Siguiente"'
        }
    }
};

export default meta;

type Story = StoryObj<NavigationButtonComponent>;

//Step 1 (storie por defecto)
export const FirstStep: Story = {
    args: {
        currentStep: 0,
        totalSteps: 4,
        canAdvance: true,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Step 1 del formulario; el botón "Anterior" está deshabilitado.'
            }
        }
    }
};

//Steps 2 y 3 (pasos intermedios)
export const MiddleStep: Story = {
    args: {
        currentStep: 2,
        totalSteps: 4,
        canAdvance: true,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Step 2 del formulario. Botones "Anterior" y "Siguiente" visibles.'
            }
        }
    }
};

//Último step
export const LastStep: Story = {
    args: {
        currentStep: 4,
        totalSteps: 4,
        canAdvance: false,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Último step del formulario; el botón "Siguiente" está deshabilitado'
            }
        }
    }
};

//Caso: no se puede avanzar por campo inválido
export const CannotAdvance: Story = {
    args: {
        currentStep: 1,
        totalSteps: 4,
        canAdvance: false,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: 'El botón "Siguiente" está deshabilitado porque el campo no es válido'
            }
        }
    }
};

//Botón "Anterior" deshabilitado. Caso de uso: formulario que no permite volver atrás
export const WithoutPreviousButton: Story = {
    args: {
        currentStep: 2,
        totalSteps: 4,
        canAdvance: true,
        showPrevious: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Botón "Anterior" deshabilitado. Caso de uso: formulario que no permite volver atrás'
            }
        }
    }
};

//Caso de uso: formularios con más de 4 pasos
export const ManySteps: Story = {
    args: {
        currentStep: 5,
        totalSteps: 10,
        canAdvance: true,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: "Steper de 10 pasos; el indicador se adapta automáticamente"
            }
        }
    }
};

//Un step. Caso de uso: formularios con un solo paso que recoge toda la información requerida al usuario
export const SingleStep: Story = {
    args: {
        currentStep: 0,
        totalSteps: 1,
        canAdvance: true,
        showPrevious: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Formulario de un solo paso; se muestra sólo el botón " ✔ "'
            }
        }
    }
};