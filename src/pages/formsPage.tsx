import { IUserFormValues } from '../interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';


function FormsPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserFormValues>();

    const onSubmit: SubmitHandler<IUserFormValues> = async (data) => {
        console.log(data); // Aquí puedes enviar los datos a tu servidor o realizar otras acciones
    };

    return (
        
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex justify-center items-center">
            <div className="max-w-fit w-full m-3 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                    Solicitud de Préstamo Personal
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                            Primer Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Introduzca su primer nombre"
                            className={`form-input w-full p-3 border border-gray-300 rounded ${errors.first_name ? 'border-red-500' : ''
                                }`}
                            {...register('first_name', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        {errors.first_name && (
                            <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">
                            Primer Apellido
                        </label>
                        <input
                            type="text"
                            placeholder="Introduzca su apellido"
                            className={`form-input w-full p-3 border border-gray-300 rounded ${errors.last_name ? 'border-red-500' : ''
                                }`}
                            {...register('last_name', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        {errors.last_name && (
                            <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            placeholder="Introduzca su correo"
                            className={`form-input w-full p-3 border border-gray-300 rounded ${errors.email ? 'border-red-500' : ''
                                }`}
                            {...register('email', {
                                required: 'Este campo es obligatorio',
                                pattern:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact_phone" className="block text-gray-700 font-semibold mb-2">
                            Teléfono de contacto
                        </label>
                        <input
                            type="text"

                            placeholder="Introduzca su telefóno de contacto"
                            className={`form-input w-full p-3 border border-gray-300 rounded ${errors.contact_phone ? 'border-red-500' : ''
                                }`}
                            {...register('contact_phone', {
                                required: 'Este campo es obligatorio',
                                // defaultValues: 2, // we can use valueAsNumber,

                                minLength: { value: 8, message: "No cumple con la cantidad de dígitos" },
                                maxLength: {
                                    value: 8,
                                    message: "Cantidad de dígitos excedido"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Número no válido',
                                }
                                // valueAsNumber: true,
                            })}
                        />
                        {errors.contact_phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.contact_phone.message}</p>
                        )}
                        {/* {errors.contact_phone && errors.contact_phone.type === "min" && (
              <span role="alert">Mínimo no cumplido</span>
            )}
            {errors.contact_phone && errors.contact_phone.type === "max" && (
              <span role="alert">Máximo excedido</span>
            )} */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="monto" className="block text-gray-700 font-semibold mb-2">
                            Monto del Préstamo
                        </label>
                        <input
                            type="text"
                            placeholder="Introduzca el monto del préstamo"
                            className={`form-input w-full p-3 border border-gray-300 rounded ${errors.loan_qty ? 'border-red-500' : ''
                                }`}
                            {...register('loan_qty', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        {errors.loan_qty && (
                            <p className="text-red-500 text-xs mt-1">{errors.loan_qty.message}</p>
                        )}
                    </div>

                    <div className="mb-6  ">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700  font-semibold py-2 px-4 rounded-full w-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-800 "
                        >
                            Solicitar Préstamo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormsPage;
