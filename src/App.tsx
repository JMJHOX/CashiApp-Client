import './App.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserFormValues } from './interfaces';

function App() {
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
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Solicitud de Préstamo Personal
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
              Primer Nombre
            </label>
            <input
              type="text"
              placeholder="Introduzca su primer nombre"
              className={`form-input w-full ${
                errors.first_name ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('first_name', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs italic">{errors.first_name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-700 font-bold mb-2">
              Primer Apellido
            </label>
            <input
              type="text"
              placeholder="Introduzca su apellido"
              className={`form-input w-full ${
                errors.last_name ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('last_name', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs italic">{errors.last_name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Introduzca su correo"
              className={`form-input w-full ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('email', {
                required: 'Este campo es obligatorio',
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="monto" className="block text-gray-700 font-bold mb-2">
              Monto del Préstamo
            </label>
            <input
              type="text"
              placeholder="Introduzca el monto del préstamo"
              className={`form-input w-full ${
                errors.loan_qty ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('loan_qty', {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.loan_qty && (
              <p className="text-red-500 text-xs italic">{errors.loan_qty.message}</p>
            )}
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full"
            >
              Solicitar Préstamo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
